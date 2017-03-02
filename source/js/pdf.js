$(document).ready(function() {
  $(".download-button").click(function() {
    var doc = new jsPDF();

    doc.fromHTML($('#pdf-title').get(0), 10, 10, {'width': 180});
    doc.fromHTML($('#pdf-start').get(0), 10, 55);
    doc.fromHTML($('#pdf-end').get(0), 10, 62);

    doc.text("Description", 10, 85);
    doc.fromHTML($('#pdf-desc').get(0), 10, 81, {'width': 180});

    doc.text("Classes", 10, 196);
    // $('.pdf-class-title').forEach(function(e) {
    //   doc.fromHTML($('#pdf-class-title').get(0), 10, 200, {'width': 180});
    //   // doc.fromHTML(
    // })

    // var classes = [];

    var classes = document.getElementsByClassName('pdf-class-title');
    var classWeek = document.getElementsByClassName('pdf-class-week');
    var classDate = document.getElementsByClassName('pdf-class-date');

    var classHeight = 200;

    for (var i = 0, len = classes.length; i < len; i++) {
      doc.fromHTML(classes[i], 10, classHeight, {'width': 180});
      
      classHeight += 20;
    }



    // doc.text("Resources", 10, 10);

    doc.save('syllabus.pdf')
  })

})
