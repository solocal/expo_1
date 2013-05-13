define([
    "js/handlers"
],
    function(Handlers)
{
    var r = {};

    r.init = function()
    {
        this.router = new $.mobile.Router({

            "/schools.html": {
                "handler": Handlers.schools.bind(this),
                "events": "bs"
            },

            "/school-candidates.html": {
                "handler": Handlers.schoolCandidates.bind(this),
                "events": "bs"
            },

            "/candidate.html": {
                "handler": Handlers.candidate.bind(this),
                "events": "bs"
            },

            "/index.html": {
                "handler": Handlers.home.bind(this),
                "events": "bs"
            },

            "/": {
                "handler": Handlers.home.bind(this),
                "events": "bs"
            }

            /*
            "#splash": {
                "handler": Handlers.splash.bind(this),
                "events": "bs"
            },
            "#menu": {
                "handler": Handlers.menu.bind(this),
                "events": "bs"
            },
            "#candidates([?].*)?": {
                "handler": Handlers.candidates.bind(this),
                "events": "bs"
            },
            "#candidate([?].*)?": {
                "handler": Handlers.candidate.bind(this),
                "events": "bs"
            }
            */

        },{

        },{
            firstMatchOnly: true
        });

        // in order to prevent foc
        $("body").show();

        // initialize page
        $.mobile.initializePage();
    };

    return r;
});
