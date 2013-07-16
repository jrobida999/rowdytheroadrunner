// Generated by CoffeeScript 1.3.3
(function() {
  var arg1, arg2, casper, casperJob, cronJob, half_hour, job, local, moment, now, shebang, url;

  shebang = "#!/usr/bin/env casperjs";

  /*
   			PHANTOM.JS
   			----------
  */


  /*
   			CASPER.JS
   			---------
  */


  casper = require("casper").create();

  cronJob = require("cron").CronJob;

  moment = require("./node_modules/moment/moment");

  now = moment(new Date()).format("YYYY-MM-DD-hh:mm");

  half_hour = 1800000;

  local = "http://localhost:3000";

  url = "";

  arg1 = casper.cli.args[0];

  arg2 = casper.cli.args[1];

  casperJob = function() {
    var savedir, viewports, x, y;
    if (arg1 != null ? arg1 : url = arg1) {

    } else {
      url = local;
    }
    viewports = [[320, 480], [320, 568], [600, 1024], [1024, 768], [1280, 800], [1440, 900]];
    x = 0;
    y = 0;
    savedir = url.replace(/[^a-zA-Z0-9]/gi, '-').replace(/^https?-+/, '');
    casper.start();
    casper.each(viewports, function(self, viewport, i) {
      var height, width;
      width = viewport[0];
      height = viewport[1];
      return casper.wait(5000, function() {
        this.viewport(width, height);
        return casper.thenOpen(url, function() {
          var actualViewPageFileName, fullPageFileName;
          this.echo("Opening at " + width);
          fullPageFileName = "" + now + "/fullPage-" + width + ".png";
          actualViewPageFileName = "" + now + "-region[" + x + "," + y + "]/" + width + "-" + height + ".png";
          this.captureSelector(fullPageFileName, "body");
          this.capture(actualViewPageFileName, {
            top: 0,
            left: 0,
            width: width,
            height: height
          });
          return this.echo("spanshoot taken..");
        });
      });
    });
    return casper.run(function() {
      return this.echo("Finished captures for " + url);
    });
  };

  job = new cronJob("* * * * *", function() {
    console.log("printing every minute..");
    return casperJob();
  }, null, true);

}).call(this);
