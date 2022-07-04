import StickySidebar from 'sticky-sidebar';

var sidebar = new StickySidebar('.sidebar__wrap', {
   containerSelector: '.sidebar',
   innerWrapperSelector: '.sidebar__list',
   topSpacing: 20,
   bottomSpacing: 20
});