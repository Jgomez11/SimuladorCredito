//Prestamos crediticios
function HTMLtoPDF1(){
  var pdf = new jsPDF('p', 'pt', 'letter');
  var vp = 'Valor del préstamo: '+$("#valorPrestamo").val();
  var tae = 'Tasa Anual Efectiva: '+$("#tae").val();
  var nc = 'Número de Cuotas: '+$("#numeroCuotas").val();
  var p = 'Períodos: '+$("#periodo").val();
  var tc = 'Tipo de Crédito: '+$("#tipoCredito").val();
  source = $('#HTMLtoPDF')[0];
  specialElementHandlers = {
  	'#bypassme': function(element, renderer){
  		return true
  	}
  }
  margins = {
      top: 160, //50
      left: 70,
      width: 530 //545
    };
    pdf.fromHTML(
    	source // HTML string or DOM elem ref.
    	, margins.left // x coord
    	, margins.top // y coord
    	, {
    		'width': margins.width // max width of content on PDF
    		, 'elementHandlers': specialElementHandlers
    	},
    	function (dispose) {
    	  // dispose: object with X, Y of the last line add to the PDF
    	  //          this allow the insertion of new lines after html
        pdf.text(70, 70, 'SIMULADOR DE CRÉDITO');
        pdf.text(90, 90, vp);
        pdf.text(90, 105, tae);
        pdf.text(90, 120, nc);
        pdf.text(90, 135, p);
        pdf.text(90, 150, tc);
        pdf.save('SimuladorCredito.pdf');
      }
      )		
  }

//Consolidacion de deudas
function HTMLtoPDF2(){
  var pdf = new jsPDF('p', 'pt', 'letter');
  var sd = 'Salario con Deducciones: '+$("#sd").val();
  var ma = 'Monto Adeudado: '+$("#montoA").val();

  pdf.text(70, 70, 'SIMULADOR DE CRÉDITO');
  pdf.text(70, 90,'* Ver comparación en la siguiente página.*');
  pdf.text(90, 110, sd);
  pdf.text(90, 125, ma);
  pdf.text(70, 145,'Detalle de Deudas:');

  source1 = $('#HTMLtoPDF1')[0];
  specialElementHandlers = {
    '#bypassme': function(element, renderer){
      return true
    }
  }
  margins = {
      top: 155, //50
      left: 70,
      width: 530 //545
    };

    pdf.fromHTML(
      source1 // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
        'width': margins.width // max width of content on PDF
        , 'elementHandlers': specialElementHandlers
      }
      );

    pdf.addPage();
    pdf.text(70,70,'COMPARACIÓN ENTRE BANCOS');
    source2 = $('#HTMLtoPDF2')[0];
    specialElementHandlers = {
      '#bypassme': function(element, renderer){
        return true
      }
    }
    margins = {
      top: 85, //50
      left: 70,
      width: 530 //545
    };

    pdf.fromHTML(
      source2 // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
        'width': margins.width // max width of content on PDF
        , 'elementHandlers': specialElementHandlers
      }
      );

    pdf.save('SimuladorCrédito.pdf');
  }




//Opcion +Prestamos crediticios
function HTMLtoPDF3(){
  var pdf = new jsPDF('p', 'pt', 'letter');
  var vp = 'Valor del préstamo: '+$("#valorPrestamo").val();
  var tae = 'Tasa Anual Efectiva: '+$("#tae").val();
  var nc = 'Número de Cuotas: '+$("#numeroCuotas").val();
  var p = 'Períodos: '+$("#periodo").val();
  var tc1 = 'Tipo de Crédito en la Tabla 1: '+$("#tipoCredito").val();
  var tc2 = 'Tipo de Crédito en la Tabla 2: '+$("#tipoCredito2").val();
  
  source = $('#HTMLtoPDF')[0];
  specialElementHandlers = {
    '#bypassme': function(element, renderer){
      return true
    }
  }
  margins = {
      top: 180, //50
      left: 70,
      width: 530 //545
    };
    pdf.fromHTML(
      source // HTML string or DOM elem ref.
      , margins.left // x coord
      , margins.top // y coord
      , {
        'width': margins.width // max width of content on PDF
        , 'elementHandlers': specialElementHandlers
      },
      function (dispose) {
        // dispose: object with X, Y of the last line add to the PDF
        //          this allow the insertion of new lines after html
        pdf.text(70, 70, 'SIMULADOR DE CRÉDITO');
        pdf.text(90, 90, vp);
        pdf.text(90, 105, tae);
        pdf.text(90, 120, nc);
        pdf.text(90, 135, p);
        pdf.text(90, 150, tc1);
        pdf.text(90, 165, tc2);
        pdf.save('SimuladorCredito.pdf');
      }
      )   
  }