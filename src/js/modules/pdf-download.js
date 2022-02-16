// jspdf
// import 'jspdf'; подключение не через npm а CDN

// import 'rasterizehtml';
// import jsPDF from 'jspdf';
// import $ from 'jquery';



// function genPDF() {
// const btn = document.getElementById("clickbind");
// const currentResumeContent = btn.closest('.modal__content');
// html2canvas(currentResumeContent).then(function () {
// var img = canvas.toDataURL("image/png");
// var doc = new jsPDF("p", "mm", "a4");
// doc.canvas.height = 72 * 11;
// doc.canvas.width = 72 * 8.5;
// doc.addImage(img, 'JPEG', 10, 10);
// doc.save('test.pdf');
// });

// }

// function onClick() {
// var pdf = new jsPDF("p", "mm", "a4");

// html2canvas(document.body).then(function (/*canvas*/) {
// var img = canvas.toDataURL("image/png");
// var pdf = new jsPDF('p', 'pt', 'letter');
// pdf.addImage(img, 'JPEG', 10, 10);
// pdf.save('test.pdf');
// });
// pdf.canvas.height = 72 * 11;
// pdf.canvas.width = 72 * 8.5;
// pdf.addHTML(document.body, function () {
//   pdf.save('web.pdf');
// });
// pdf.addHTML(document.body, function () {
//   pdf.save('Denny_Maverick_resume.pdf');
// });
// pdf.addHTML($('#modal-resume')[0], function () {
//   pdf.save('Denny_Maverick_resume.pdf');
// });

// pdf.save('Denny_Maverick_resume.pdf');
// };

// const element = document.getElementById("clickbind");
// element.addEventListener("click", onClick);