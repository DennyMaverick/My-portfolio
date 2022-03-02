const printLink = document.getElementById('printLink');

function CallPrint(strid) {
  var prtContent = document.getElementById(strid);
  var WinPrint = window.open('', '', 'left=50,top=50,width=800,height=640,toolbar=0,scrollbars=1,status=0');
  WinPrint.document.write('');
  WinPrint.document.write(prtContent.innerHTML);
  WinPrint.document.write('');
  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
  prtContent.innerHTML = strOldOne;
}

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth > 1100) {
    printLink.addEventListener('click', () => {
      CallPrint('resume');
    });
  }
});

if (document.documentElement.clientWidth > 1100) {
  printLink.addEventListener('click', () => {
    CallPrint('resume');
  });
}
