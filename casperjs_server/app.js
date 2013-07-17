// Generated by CoffeeScript 1.3.3
(function() {
  var arg1, arg2, casper, casperjob, cronjob, crontab, half_hour, local, moment, shebang, url;

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

  crontab = require("cron").CronJob;

  moment = require("./node_modules/moment/moment");

  half_hour = 1800000;

  local = "http://localhost:3000";

  url = "";

  arg1 = casper.cli.args[0];

  arg2 = casper.cli.args[1];

  casperjob = function() {
    var now, savedir, viewports, x, y;
    now = moment(new Date()).format("YYYY-MM-DD-hh:mm");
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
          fullPageFileName = "screenshots/" + now + "/fullPage-" + width + ".png";
          actualViewPageFileName = "screenshots/" + now + "-region[" + x + "," + y + "]/" + width + "-" + height + ".png";
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
      this.echo("Finished captures for " + url);
      return cronjob.start();
    });
  };

  cronjob = new crontab("* 00 9-5 * * 1-5", function() {
    console.log("printing every minute..");
    return casperjob();
  }, null, true);

  console.log("cronjob runs every weekday from 9am to 5pm at 30 minute intervals");

}).call(this);
