$(document).ready(function() {
  $(".download-button").click(function() {
    var doc = new jsPDF();

    doc.fromHTML($('#pdf-title').get(0), 10, 5);
    doc.fromHTML($('#pdf-start').get(0), 10, 22);
    doc.fromHTML($('#pdf-end').get(0), 10, 28);

    // doc.text("DESCRIPTION", 10, 55);
    doc.fromHTML($('#pdf-desc').get(0), 10, 36, {'width': 180});

    // doc.text("CLASSES", 10, 110);
    var classes = document.getElementsByClassName('pdf-class-title');
    // var classWeek = document.getElementsByClassName('pdf-class-week');
    var classDesc = document.getElementsByClassName('pdf-class-desc');

    var classHeight = 85;
    var weekDesc = 95;

    for (var i = 0, len = classes.length; i < len; i++) {
      doc.fromHTML(classes[i], 10, classHeight, {'width': 180});
      doc.fromHTML(classDesc[i], 10, weekDesc, {'width': 180});
      classHeight += 80;
      weekDesc += 80;
    }

    doc.save('syllabus.pdf')
  })

})
