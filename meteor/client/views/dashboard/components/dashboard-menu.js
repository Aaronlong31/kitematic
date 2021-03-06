Template.dashboard_menu.events({
  'click .mac-close': function () {
    win.close();
  },
  'click .mac-minimize': function () {
    win.minimize();
  },
  'mouseover .mac-window-options': function () {
    $('.mac-close i').show();
    $('.mac-minimize i').show();
    $('.mac-maximize i').show();
  },
  'mouseleave .mac-window-options': function () {
    $('.mac-close i').hide();
    $('.mac-minimize i').hide();
    $('.mac-maximize i').hide();
  }
});

Template.dashboard_menu.rendered = function () {
  $('.nav a').attr('tabIndex', '-1');
  $('.nav a').attr('onfocus', 'this.blur()');
  $('.nav a').tooltip();
};
