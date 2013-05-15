define(['handlebars'], function(Handlebars) {

this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

Handlebars.registerPartial("content", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function";


  buffer += "<div data-role=\"content\">\n\n    ";
  if (stack1 = helpers.content) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.content; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n</div>\n";
  return buffer;
  }));

Handlebars.registerPartial("footer", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-role=\"footer\" data-theme=\"a\">\n    <h1>Southern State University</h1>\n</div><!-- /footer -->\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.showFooter, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("header", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, self=this;

function program1(depth0,data) {
  
  
  return "\n<div data-role=\"header\" class=\"nav-special\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">\n    <h1>147th Commencement</h1>\n    <div data-role=\"navbar\" class=\"nav-special\" data-theme=\"a\">\n        <ul>\n            <li><a href=\"index.html\" data-transition=\"slide\" id=\"home\" data-icon=\"custom\" data-theme=\"b\"></a></li>\n        </ul>\n    </div><!-- /navbar -->\n</div><!-- /header -->\n";
  }

  stack1 = helpers['if'].call(depth0, depth0.showHeader, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  }));

Handlebars.registerPartial("page", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials; data = data || {};
  var buffer = "", stack1, options, self=this, functionType="function", blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "";
  return buffer;
  }

  stack1 = self.invokePartial(partials.header, 'header', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.content, 'content', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.debug) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.debug; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.debug) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = self.invokePartial(partials.footer, 'footer', depth0, helpers, partials, data);
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n<script>\n    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n\n    ga('create', 'UA-40820424-1', 'solocal.mobi');\n    ga('send', 'pageview');\n\n</script>\n";
  return buffer;
  }));

Handlebars.registerPartial("popup", Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <p align=\"center\">";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        ";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button data-role=\"button\" data-inline=\"true\" data-rel=\"back\" data-theme=\"c\" class=\"button-cancel\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.cancel)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n    ";
  return buffer;
  }

function program7(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <button data-role=\"button\" data-inline=\"true\" data-rel=\"back\" data-transition=\"flow\" data-theme=\"b\" class=\"button-confirm\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.confirm)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</button>\n    ";
  return buffer;
  }

  buffer += "<div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\" data-add-back-btn=\"false\">\n    <h3 align=\"center\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n</div>\n<div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content\">\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.message, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    ";
  stack1 = helpers['if'].call(depth0, depth0.body, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n    <br/>\n\n    <div style=\"text-align:center\">\n\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.cancel), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.buttons),stack1 == null || stack1 === false ? stack1 : stack1.confirm), {hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n    </div>\n\n</div>";
  return buffer;
  }));

this["Handlebars"]["templates"]["candidate.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n<div class=\"candidate-info\">\r\n\r\n    <h1 class=\"name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n    <div class=\"class\">Class of "
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n    <div class=\"degree-school\">";
  if (stack2 = helpers.degreeTitle) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.degreeTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " - ";
  if (stack2 = helpers.schoolTitle) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.schoolTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\r\n\r\n    <div class=\"candidate-info-content\">\r\n\r\n        <div class=\"photo\">\r\n            <img src=\"/preview/"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/candidate_info?size=256\">\r\n        </div>\r\n\r\n        <p class=\"about\">";
  stack2 = ((stack1 = ((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.about)),stack1 == null || stack1 === false ? stack1 : stack1['long'])),typeof stack1 === functionType ? stack1.apply(depth0) : stack1);
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</p>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.page) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["home.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<!-- Begin id menupanel -->\r\n<div data-role=\"panel\" id=\"menupanel\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/program2.svg\" alt=\"Program D\">Doctoral Hooding</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/program2.svg\" alt=\"Program C\">Commencement Program</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/person.svg\" alt=\"Chancellor\">The President</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/person.svg\" alt=\"Chancellor\">The Chancellor</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/board3.svg\" alt=\"Board\">Board of Trustees</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/person2.svg\" alt=\"Speaker D\">Doctoral Speaker</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/person2.svg\" alt=\"Speaker C\">Commencement Speaker</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/message2.svg\" alt=\"Alumni\">Message to New Alumni</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/remote4.svg\" alt=\"Alumni\">Remote Viewing Centers</a></li>\r\n        </ul>\r\n\r\n        <h4><i>Courtesy</i></h4>\r\n\r\n        <div class=\"gn-5\">\r\n            <a href=\"http://expo2.solocal.mobi\" data-role=\"button\" rel=\"external\" data-mini=\"true\" data-theme=\"a\" >Southern Alumni</a>\r\n        </div>\r\n\r\n        <h4><i>&copy; 2013</i></h4>\r\n        <h4>Solocal, Inc.</h4>\r\n\r\n    </div><!-- /panel-content -->\r\n</div><!-- /menupanel -->\r\n\r\n<!-- Begin id gradpanel -->\r\n<div data-role=\"panel\" id=\"gradpanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/degrees.svg\" alt=\"Degrees\">Schools and Departments</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cap.svg\" alt=\"Doctoral\">Doctoral Candidates</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cap.svg\" alt=\"Post-Bacc\">Post-Baccalaureate</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cap.svg\" alt=\"Graduate\">Graduate Candidates</a></li>\r\n            <li><a href=\"schools.html\" data-prefetch=\"true\" data-transition=\"slide\" data-graduate-filter=\"bacca\"><img src=\"icons/cap.svg\" alt=\"Bacc\">Baccalaureate Candidates</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cap.svg\" alt=\"ROTC\">ROTC Candidates</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cap.svg\" alt=\"Certs\">Certificate Candidates</a></li>\r\n        </ul>\r\n\r\n        <br>\r\n    </div>\r\n</div><!-- /infopanel -->\r\n\r\n<!-- Begin id infopanel -->\r\n<div data-role=\"panel\" id=\"infopanel\" data-position=\"right\" data-position-fixed=\"true\" data-display=\"overlay\" data-swipe-close=\"true\" data-dismissible=\"true\" data-theme=\"a\">\r\n\r\n    <div class=\"panel-content\">\r\n        <br>\r\n        <ul>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/events.svg\" alt=\"Events\">Commencement Events</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/campaign.svg\" alt=\"Cmte\">Annual Fund</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/cmte.svg\" alt=\"Cmte\">Comm. Committee</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/disability.svg\" alt=\"Credits\">Disability Services</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/faq.svg\" alt=\"Credits\">FAQ's</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/photos.svg\" alt=\"Privacy\">Photos and Video</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/contacts2.svg\" alt=\"Contacts\">Contacts</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/directions.svg\" alt=\"Direction\">Directions</a></li>\r\n            <li><a href=\"#\" data-prefetch=\"true\" data-transition=\"slide\"><img src=\"icons/privacy.svg\" alt=\"Privacy\">Privacy</a></li>\r\n        </ul>\r\n\r\n        <h4><i>&copy; 2013</i></h4>\r\n        <div class=\"gn-5\">\r\n            <a href=\"http://www.solocal.mobi\" data-role=\"button\" data-icon=\"page\" data-mini=\"true\" data-theme=\"a\" >Solocal, Inc.</a>\r\n            <a href=\"tel:1+910-691-9838\" data-role=\"button\" data-icon=\"phone\" data-mini=\"true\" data-theme=\"a\" >Call</a>\r\n            <a href=\"mailto:smann@solocal.mobi\" data-role=\"button\" data-icon=\"email\" data-mini=\"true\" data-theme=\"a\" >Email</a>\r\n        </div>\r\n\r\n    </div>\r\n</div><!-- /infopanel -->\r\n\r\n<!-- Begin HEADER -->\r\n<div data-role=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">\r\n    <h1>112th Commencement</h1>\r\n\r\n    <!-- Begin NavBar -->\r\n    <div data-role=\"navbar\" class=\"nav-special\" data-grid=\"c\" data-theme=\"a\">\r\n        <ul>\r\n            <li><a href=\"#menupanel\" data-role=\"button\" id=\"menutop2\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"b\"></a></li>\r\n            <li><a href=\"#popupGlance\" data-rel=\"popup\" data-transition=\"slidedown\" data-position-to=\"window\" data-role=\"button\" id=\"calendartop\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"b\"></a></li>\r\n            <li><a href=\"#gradpanel\" data-role=\"button\" id=\"capmenu\" data-icon=\"custom\" data-theme=\"b\"></a></li>\r\n            <li><a href=\"#infopanel\" data-role=\"button\" id=\"info\" data-icon=\"custom\" data-iconpos=\"notext\" data-theme=\"b\"></a></li>\r\n        </ul>\r\n    </div><!-- /navbar -->\r\n</div><!-- /header -->\r\n\r\n<!-- Begin CONTENT -->\r\n<div data-role=\"content\">\r\n    <br>\r\n    <div class=\"gn-5\"><img src=\"img/title.svg\"  alt=\"Commencement 2013\" ></div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <div class=\"gn-5\"><img src=\"img/southern2.svg\"  alt=\"Southern Logo\" ></div>\r\n    <br>\r\n    <br>\r\n    <br />\r\n    <div class=\"gn-5\">\r\n        <a href=\"#\" data-transition=\"slide\" data-inline=\"true\" data-role=\"button\" data-theme=\"b\">Message From The Chancellor</a>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n    <br>\r\n\r\n    <div data-role=\"popup\" id=\"popupGlance\" data-theme=\"a\" style=\"max-width: 400px; min-width: 275px;\" class=\"ui-corner-all\">\r\n        <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">\r\n            <h1>At a Glance</h1>\r\n        </div>\r\n\r\n        <div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content\">\r\n            <div class=\"gn-2\"><h5>Doctoral Hooding</h5></div>\r\n            <div class=\"glance\">\r\n                <ul>\r\n                    <li><strong>Date:</strong> June 11, 2013</li>\r\n                    <li><strong>Location:</strong> The Stadium</li>\r\n                    <li><strong>Time:</strong> 11:30 AM to 2:30 PM</li>\r\n                    <li><strong>Admission Begins:</strong> 11:30 AM</li>\r\n                </ul>\r\n            </div>\r\n\r\n            <div class=\"gn-2\"><h5>Commencement Ceremony</h5></div>\r\n            <div class=\"glance\">\r\n                <ul>\r\n                    <li><strong>Date:</strong> June 12, 2013</li>\r\n                    <li><strong>Location:</strong> The Stadium</li>\r\n                    <li><strong>Time:</strong> 10:00 AM</li>\r\n                    <li><strong>Admission Begins:</strong> 8:30 AM</li>\r\n                </ul>\r\n            </div>\r\n\r\n        </div><!-- /popcontent -->\r\n\r\n    </div><!-- /popup -->\r\n\r\n</div><!-- /content -->\r\n";
  });

this["Handlebars"]["templates"]["popup-candidate.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div data-role=\"popup\" data-overlay-theme=\"a\" data-theme=\"a\" class=\"ui-corner-all popup-candidate\">\r\n\r\n    <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">\r\n        <h1 class=\"name\">"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.firstName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.lastName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\r\n        <div class=\"class\">Class of "
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.year)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</div>\r\n        <div class=\"degree-school\">";
  if (stack2 = helpers.degreeTitle) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.degreeTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + " - ";
  if (stack2 = helpers.schoolTitle) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.schoolTitle; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "</div>\r\n    </div>\r\n\r\n    <div data-role=\"content\" data-theme=\"d\" class=\"ui-corner-bottom ui-content popup-candidate-content\">\r\n\r\n        <div class=\"photo\">\r\n            <img src=\"/preview/"
    + escapeExpression(((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1._doc)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "/candidate_popup?size=128\">\r\n        </div>\r\n\r\n        <p class=\"about\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.candidate),stack1 == null || stack1 === false ? stack1 : stack1.about)),stack1 == null || stack1 === false ? stack1 : stack1.medium)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n\r\n        <fieldset class=\"ui-grid-a\">\r\n            <div class=\"ui-block-a\"><button class=\"gifting\" data-theme=\"b\" data-inline=\"false\" data-mini=\"true\">Gifting</button></div>\r\n            <div class=\"ui-block-b\"><button class=\"social\" data-theme=\"b\" data-inline=\"false\" data-mini=\"true\">Social</button></div>\r\n            <div class=\"ui-block-c\"><button class=\"profile\" data-theme=\"b\" data-inline=\"false\" data-mini=\"true\">View Profile</button></div>\r\n        </fieldset>\r\n        <div class=\"gn-5\">\r\n            <a href=\"#\" data-role=\"button\" data-rel=\"back\" data-icon=\"delete\" data-mini=\"true\" data-theme=\"a\" >Close Window</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>";
  return buffer;
  });

this["Handlebars"]["templates"]["school-candidates.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\r\n\r\n<div class=\"grads\">\r\n    <h2>"
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h2>\r\n    <p style=\"white-space:normal\">Established "
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.foundationYear)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\r\n    <p style=\"white-space:normal\"><em>Dean "
    + escapeExpression(((stack1 = ((stack1 = depth0.school),stack1 == null || stack1 === false ? stack1 : stack1.deanName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</em></p>\r\n</div>\r\n\r\n<div class=\"gn-1\"><h3>"
    + escapeExpression(((stack1 = ((stack1 = depth0.degree),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h3></div>\r\n<br>\r\n\r\n<ul data-role=\"listview\" data-inset=\"true\" data-filter=\"true\"\r\n    data-filter-placeholder=\"Find your graduate...\" data-theme=\"c\" data-divider-theme=\"a\">\r\n\r\n    ";
  stack2 = helpers.each.call(depth0, depth0.groupedCandidates, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\r\n\r\n</ul>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li data-role=\"list-divider\">Architecture<span class=\"ui-li-count\">";
  if (stack1 = helpers.candidateCount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.candidateCount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</span></li>\r\n\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.candidates, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li>\r\n        <a href=\"#\" data-rel=\"popup\" data-transition=\"slidedown\" data-candidate-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.lastName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.lastName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + ", ";
  if (stack1 = helpers.firstName) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.firstName; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + " </a>\r\n    </li>\r\n    ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.page) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

this["Handlebars"]["templates"]["schools.html"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var stack1, options, functionType="function", escapeExpression=this.escapeExpression, self=this, blockHelperMissing=helpers.blockHelperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n\r\n<ul data-role=\"listview\" data-inset=\"true\" data-icon=\"false\" data-theme=\"c\" data-divider-theme=\"a\">\r\n\r\n    ";
  stack1 = helpers.each.call(depth0, depth0.schools, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n</ul>\r\n\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <li data-role=\"list-divider\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</li>\r\n\r\n        ";
  stack1 = helpers.each.call(depth0, depth0.departments, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n    ";
  return buffer;
  }
function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n        <li>\r\n            <a href=\"school-candidates.html\" data-prefetch=\"true\" data-transition=\"slide\" data-school-id=\"";
  if (stack1 = helpers.schoolId) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.schoolId; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-school-department-id=\"";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\r\n        </li>\r\n        ";
  return buffer;
  }

  options = {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data};
  if (stack1 = helpers.page) { stack1 = stack1.call(depth0, options); }
  else { stack1 = depth0.page; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  if (!helpers.page) { stack1 = blockHelperMissing.call(depth0, stack1, options); }
  if(stack1 || stack1 === 0) { return stack1; }
  else { return ''; }
  });

return this["Handlebars"]["templates"];

});