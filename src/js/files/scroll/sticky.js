import StickySidebar from 'sticky-sidebar';


let parentSidebar = document.querySelector('.sidebar__wrap')

if (parentSidebar) {
   var sidebar = new StickySidebar('.sidebar__wrap', {
      topSpacing: 20,
      bottomSpacing: 0
   });
}
