function hideSidebar () {
  if (jQuery(window).width() <= 600) {
    jQuery('.chat__sidebar').css('transform', 'translateX(-100%)');
    jQuery('.sidebar-toggle-button').show();
  }
};

function showSidebar () {
  jQuery('.chat__sidebar').css('transform', 'translateX(0)');
  jQuery('.sidebar-toggle-button').hide();
};
