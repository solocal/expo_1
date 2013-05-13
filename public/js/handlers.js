define([
    "js/engine",
    "cms/ui",
    "cms/auth",
    "cms/http",
    "compiled_templates"
],
    function(Engine, UI, Auth, HTTP)
{
    var getDegreeTitle = function(degree)
    {
        var degreeTitle = "";

        if (degree == "ba") {
            degreeTitle = "Bachelor of Arts";
        }
        if (degree == "bs") {
            degreeTitle = "Bachelor of Science";
        }
        if (degree == "ma") {
            degreeTitle = "Master of Arts";
        }
        if (degree == "ms") {
            degreeTitle = "Master of Science";
        }
        if (degree == "phd") {
            degreeTitle = "Doctor of Philosophy";
        }

        return degreeTitle;
    };

    var getSchoolTitle = function(school)
    {
        var schoolTitle = "";

        if (school == "architecture") {
            schoolTitle = "Architecture";
        }

        return schoolTitle;
    };

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //
    // PUBLIC METHODS
    //
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var r = {};

    r.home = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var model = UI.buildPageModel("home");

        UI.executePage(model, function() {

            // if they click on a graduate filter, set into session ahead of following link
            $("[data-graduate-filter]").off().click(function(e) {

                var filter = $(this).attr("data-graduate-filter");

                // bacca => "bs", "ba"
                if (filter === "bacca") {
                    Engine.currentDegreeFilter(["bs", "ba"]);
                }
            });

        });
    };

    r.schools = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var query = {};

        var degreeFilter = Engine.currentDegreeFilter();
        if (degreeFilter)
        {
            query["degree"] = {
                "$in": degreeFilter
            };
        }

        var schools = Engine.querySchools(query, function(err, schools) {

            var model = UI.buildPageModel("schools");
            model.showHeader = true;
            model.showFooter = true;
            model["schools"] = [];

            for (var schoolId in schools)
            {
                var school = schools[schoolId];

                var schoolBlock = {
                    "id": schoolId,
                    "title": school.title,
                    "departments": []
                };
                for (var departmentId in school.departments)
                {
                    var department = school.departments[departmentId];

                    var departmentBlock = {
                        "id": departmentId,
                        "schoolId": schoolId,
                        "title": department.title
                    };

                    schoolBlock.departments.push(departmentBlock);
                }

                model["schools"].push(schoolBlock);
            }

            UI.executePage(model, function() {

                $("[data-school-id]").off();
                $("[data-school-department-id]").off();

                $("[data-school-id]").click(function(e) {

                    var schoolId = $(this).attr("data-school-id");
                    var school = schools[schoolId];

                    // set the current school id into session
                    Engine.currentSchool(school);
                    Engine.currentSchoolId(schoolId);
                });

                $("[data-school-department-id]").click(function(e) {

                    var schoolDepartmentId = $(this).attr("data-school-department-id");

                    // set the school department id
                    Engine.currentSchoolDepartmentId(schoolDepartmentId);
                });

            });
        })
    };

    r.schoolCandidates = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var query = {};

        var school = Engine.currentSchool();
        if (!school)
        {
            UI.redirectToPage("/index.html");
            return;
        }

        Engine.queryCandidates(query, function(err, candidates) {

            var model = UI.buildPageModel("school-candidates");
            model.showHeader = true;
            model.showFooter = true;
            model.school = school;
            //model.degree = {};
            //model.degree.title = "Bachelor of Science";

            for (var i = 0; i < candidates.length; i++)
            {
                candidates[i].id = candidates[i]._doc;
                //candidates[i].ambitions = "TEST_AMBITIONS"; // todo: convert short ambitions
                //candidates[i].accomplishments = "TEST_ACCOMPLISHMENTS"; // todo: convert short accomplishments
            }

            // TODO: sort candidates into degree name buckets
            model.groupedCandidates = {
                "architecture": {
                    "title": "Architecture",
                    "candidates": candidates,
                    "candidateCount": candidates.length
                }
            };

            UI.executePage(model, function() {

                $("[data-candidate-id]").off().click(function(e) {

                    var candidateId = $(this).attr("data-candidate-id");

                    // set the current candidate id into session
                    //Engine.currentCandidateId(candidateId);

                    // popup model
                    var m = {};
                    for (var i = 0; i < candidates.length; i++) {
                        if (candidates[i]._doc == candidateId) {
                            m.candidate = candidates[i];
                        }
                    }

                    // degreeTitle
                    m.degreeTitle = getDegreeTitle(m.candidate.degree);

                    // schoolTitle
                    m.schoolTitle = getSchoolTitle(m.candidate.school);

                    UI.showTemplatePopup("popup-candidate", m, function(el) {

                        $(el).find("button.profile").off().click(function(e) {

                            Engine.currentCandidateId(candidateId);
                            UI.redirectToPage("/candidate.html");

                            e.preventDefault();

                        });
                    });

                });

            });
        })
    };

    r.candidate = function(type, match, ui)
    {
        if (!match) {
            return;
        }

        var candidateId = Engine.currentCandidateId();
        if (!candidateId)
        {
            UI.redirectToPage("/index.html");
            return;
        }

        Engine.readCandidate(candidateId, function(err, candidate) {

            var model = UI.buildPageModel("candidate");
            model.showHeader = true;
            model.showFooter = true;
            model.candidate = candidate;

            // degreeTitle
            model.degreeTitle = getDegreeTitle(model.candidate.degree);

            // schoolTitle
            model.schoolTitle = getSchoolTitle(model.candidate.school);

            UI.executePage(model, function() {

            });
        })
    };

    return r;
});