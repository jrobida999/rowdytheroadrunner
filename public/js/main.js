// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    $(".clickable").click(function(event) {
      event.preventDefault();
      if ($(this).data().href) {
        return window.open($(this).data().href, "_self");
      }
    });
    return $Trumba.addSpud({
      webName: "msudenver-events-calendars",
      spudType: "upcoming",
      teaserBase: "http://www.trumba.com/calendars/msudenver-events-calendars",
      spudId: "homepage_events"
    });
  });

}).call(this);
