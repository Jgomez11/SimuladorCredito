

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<!-- saved from url=(0074)http://d15544972.c101.consulticltda.com/images/documentos/1110Calculo.html -->

<HTML><HEAD><TITLE>Cálculo de Créditos</TITLE>
	<meta charset="utf-8">
	<META http-equiv=Content-Type content="text/html; charset=windows-1252">
	<!-- Additional CSS Files -->
	<link rel="stylesheet" type="text/css" href="Frameworks/Bootstrap/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="Frameworks/Semantic/semantic.min.css">
	<link rel="stylesheet" type="text/css" href="Recursos/Estilos/font-awesome.css">
	<link rel="stylesheet" href="Recursos/Estilos/style.css">
	<SCRIPT language=JavaScript>

		

		var FRANCES=false; var ALEMAN=false; var TIN=0; var TA=0; var TAN=0; var AA=0;
		var CUOTA=""; var I=0; var AN=0; var IN=0; var A1=0; var CP2=0; var POT=0; var CP1=0;

		function calcula(form)
		{
// DATOS DEL FORMULARIO
var FRANCES=false; var ALEMAN=false; var TIN=0; var TA=0; var TAN=0; var AA=0;
var CUOTA=""; var I=0; var AN=0; var IN=0; var A1=0; var CP2=0; var POT=0; var CP1=0;
var C=document.form1.CAPITAL.value;
var J=(document.form1.TAE.value)/100;
var N=document.form1.PERIODO.value;
var D=document.form1.DIFERIDO.value;
var Q=document.form1.RAZON.value/100;
N=Math.round(N);
var M=document.form1.CUOTA.options[document.form1.CUOTA.selectedIndex].value;
var DETALLE=document.form1.VISTA[0].checked;
var FRANCES=document.form1.METODO[0].checked;
var ALEMAN=document.form1.METODO[1].checked;
var INCARENCIA=document.form1.INCARENCIA.checked;
var DD=document.form1.DECIMAL.options[document.form1.DECIMAL.selectedIndex].value;
if(M==1){CUOTA="ANUALES"} if(M==2){CUOTA="SEMESTRALES"} if(M==4){CUOTA="TRIMESTRALES"} if(M==12){CUOTA="MENSUALES"}


	if(FRANCES){
		I=Math.pow(1+J,1/M)-1; AN=0; IN=0; A1=0; CP2=C; POT=parseInt(D)-N; TIN=0; TA=0; TAN=0;
		document.write('<br>');
		document.write('<center><table border="0" bgcolor="#ffcc33" width="100%"><tr><td bgcolor="#ffffff"><center><a href="javascript:history.go(-1)\"><font face="Verdana" size="2" color="007bce"><b>Volver</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:close()"><font face="Verdana" size="2" color="007bce"><b>Cerrar esta ventana</a><br></td></tr><tr><td><center><font size="+0" face="Arial" color="#000000"><b>CÁLCULO DE PRÉSTAMOS-wf<br><font size="2" color="#000000">Préstamo de duración '+Math.round(N*10/M)/10+' años</td></tr></table></center>');
		document.write('<P>');
		document.write('<div align="center"><center><table border="1" bgcolor="339933" width="50%"><tr><td align="right"><font face="Verdana" size="2" color="ffffff"><b>PRINCIPAL:</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+C+'</td></tr><tr><td align="right"><font face="Verdana" size="2" color="ffffff"><b>T.A.E en %</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+J*100+'</td></tr><tr><td align="right"><font face="Verdana" size="2" color="ffffff"><b>Cuotas</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+CUOTA+'</td></tr><tr><td align="right"><font face="Verdana" size="2" color="ffffff"><b>Períodos: </td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+N+'</td></tr><tr><td align="right"><font face="Verdana" size="2" color="ffffff"><b>Periodos de Gracia:</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+D+'</td></tr></table></center></div>');
		document.write('<P>');

//Vista
if(DETALLE) {
	document.write('<center><table border="1" bgcolor="#339933"><tr bgcolor="#ffcc33"><td align="center"><font face="Verdana" size="2" color="000000"><b>PERIODO</td><td align="center"><font face="Verdana" size="2" color="000000"><b>CUOTAS</td><td align="center"><font face="Verdana" size="2" color="000000"><b>INTERESES</td><td align="center"><font face="Verdana" size="2" color="000000"><b>AMORTIZACION</td><td align="center"><font face="Verdana" size="2" color="000000"><b>CAPITAL PENDIENTE</td></tr>');
}
for (var K=0;K<=N ;K++){

	TIN=TIN+IN; TA=TA+A1; TAN=TAN+AN;
	if(DETALLE) {
		document.write('<tr><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+K+'</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+deci(AN,DD)+'</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+deci(IN,DD)+'</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+deci(A1,DD)+'</td><td align="center"><font face="Verdana" size="2" color="ffffff"><b>'+deci(CP2,DD)+'</td></tr>');
	}
	if(K<D){
		if(INCARENCIA){AN=C*I; IN=C*I; A1=0; CP2=C;}
		if(!INCARENCIA){AN=0; IN=0; CP2=C*Math.pow(1+I,K);}
	}
	if(K==D){
		if(INCARENCIA){AN=(C*I)/(1-Math.pow(1+I,POT)); IN=C*I; A1=AN-IN; CP2=C-A1; CP1=CP2;}
		if(!INCARENCIA){CP1=C*Math.pow(1+I,D); AN=(CP1*I)/(1-Math.pow(1+I,POT)); IN=CP1*I; A1=AN-IN; CP2=CP1-A1}
	}

	if(K>D){IN=CP1*I; A1=AN-IN ; CP2=CP1-A1; CP1=CP2;}

}
if(DETALLE) {
	document.write('<tr><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td></tr>');
	document.write('<tr bgcolor="#ffcc33"><td align="center"><font face="Verdana" size="2" color="000000"><b>TOTALES:</td><td align="center"><font face="Verdana" size="2" color="000000"><b>'+deci(TAN,DD)+'</td><td align="center"><font face="Verdana" size="2" color="000000"><b>'+deci(TIN,DD)+'</td><td align="center"><b><font face="Verdana" size="2" color="000000"><b>'+deci(TA,DD)+'</td><td align="center">&nbsp;</td></tr>');
	document.write('</table></center>');
}

if(!DETALLE){
	document.write('<center><table border="1" width="50%"><tr bgcolor="#ffcc33"><td align="center">&nbsp;</td><td align="center"><font face="Verdana" size="2" color="000000"><b>CUOTAS</td><td align="center"><font face="Verdana" size="2" color="000000"><b>INTERESES</td><td align="center"><font face="Verdana" size="2" color="000000"><b>AMORTIZACION</td></tr>');
	document.write('<tr bgcolor="#007bce"><td align="center"><font face="Verdana" size="2" color="ffff00"><b>TOTALES:</td><td align="center"><font face="Verdana" size="2" color="ffff00"><b>'+deci(TAN,DD)+'</td><td align="center"><font face="Verdana" size="2" color="ffff00"><b>'+deci(TIN,DD)+'</td><td align="center"><font face="Verdana" size="2" color="ffff00"><b>'+deci(TA,DD)+'</td></tr>');
	document.write('</table></center>');
}
}


if(ALEMAN){
	I=Math.pow(1+J,1/M)-1; AA=C*(1+I-Q)/(1-Math.pow(Q,N)*Math.pow(1+I,-N)); TIN=0; TA=0; TAN=0;
	document.write('<br>');
	document.write('<center>METODO ALEMAN Préstamo de duración '+Math.round(N*10/M)/10+' años</center>');
	document.write('<P>');
	document.write('<div align="center"><center><table border="1"><tr><td align="center">PRINCIPAL:</td><td align="center">'+C+'</td></tr><tr><td align="center">T.A.E en %</td><td align="center">'+J*100+'</td></tr><tr><td align="center">Cuotas</td><td align="center">'+CUOTA+'</td></tr><tr><td align="center">Períodos: </td><td align="center">'+N+'</td></tr><tr><td align="center">Razón Geométrica %:</td><td align="center">'+Q*100+'</td></tr></table></center></div>');
	document.write('<P>');

//Vista
if(DETALLE) {
	document.write('<center><table border="1"><tr><td align="center">PERIODO</td><td align="center">ANUALIDAD</td><td align="center">INTERESES</td><td align="center">AMORTIZACION</td><td align="center">CAPITAL PENDIENTE</td></tr>');
}
for (var K=0;K<=N ;K++){
	if(K==0){AN=0; IN=0; A1=0; CP2=C;}
	if(K==1){AN=AA; IN=CP2*I; A1=AN-IN; CP2=CP2-A1}
	if(K>1){AN=AN*Q; ;K1=K-2; A1=((A1*(1+I))-(AA*(1-Q)*(Math.pow(Q,K1)))); IN=AN-A1; CP2=CP2-A1;}
//A1=((A1*(1+I))-(AA*(1-Q)*Math.pow(Q,K1)))

TIN=TIN+IN; TA=TA+A1; TAN=TAN+AN;
if(DETALLE) {
	document.write('<tr><td align="center">'+K+'</td><td align="center">'+deci(AN,DD)+'</td><td align="center">'+deci(IN,DD)+'</td><td align="center">'+deci(A1,DD)+'</td><td align="center">'+deci(CP2,DD)+'</td></tr>');
}
}

if(DETALLE) {
	document.write('<tr><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td><td align="center">&nbsp;</td></tr>');
	document.write('<tr><td align="center">TOTALES:</td><td align="center">'+deci(TAN,DD)+'</td><td align="center">'+deci(TIN,DD)+'</td><td align="center">'+deci(TA,DD)+'</td><td align="center">&nbsp;</td></tr>');
	document.write('</table></center>');
}

if(!DETALLE){
	document.write('<center><table border="1"><tr><td align="center">&nbsp;</td><td align="center">ANUALIDADES</td><td align="center">INTERESES</td><td align="center">AMORTIZACION</td></tr>');
	document.write('<tr><td align="center">TOTALES:</td><td align="center">'+deci(TAN,DD)+'</td><td align="center">'+deci(TIN,DD)+'</td><td align="center">'+deci(TA,DD)+'</td></tr>');
	document.write('</table></center>');
}
}

function deci(GG,KK){return (Math.round(GG*Math.pow(10,KK))/Math.pow(10,KK)) }
}

//-->
</SCRIPT>

<META content="MSHTML 6.00.2900.2912" name=GENERATOR></HEAD>
<BODY text=#000000 vLink=#ffff00 aLink=#00ff00 link=#ffff00 bgColor=#ffffff 
leftMargin=0 topMargin=0 MARGINHEIGHT="0" MARGINWIDTH="0">
<CENTER>
	<TABLE cellSpacing=0 cellPadding=0 bgColor=#339933 border=0 >
		<TBODY>
			<TR>
				<TD vAlign=top align=left>
					<TABLE cellSpacing=0 cellPadding=0 width="100%" border=0 >
						<TBODY>
							<TR>
								<TD vAlign=bottom align=left>
									<TABLE cellSpacing=4 cellPadding=2 width="100%" border=0 class="ui single line table">
										<TBODY>
											<TR>
												<TD vAlign=top align=left bgColor=#ffcc33 colSpan=2><B><FONT 
													face=Arial size=+0>
													<CENTER>CÁLCULO DE PRÉSTAMOS - PROGESCOM
													</CENTER></FONT></B></TD></TR></TBODY></TABLE></TD></TR></TBODY></TABLE>
													<FORM name=form1 align="center">
														<TABLE borderColorDark=#339933 cellPadding=4 width="100%" bgColor=#339933 
														borderColorLight=#ffffff border=1>
														<TBODY>
															<TR>
																<TD align=middle>
																	<P align=right><B><FONT face=Verdana color=#ffffff size=-1>Valor del 
																	Préstamo:</FONT></B></P></TD>
																	<TD align=middle>
																		<CENTER><FONT face=Verdana color=#ffffff><INPUT tabIndex=1 size=10 
																			value=0 name=CAPITAL></FONT></CENTER></TD>
																			<TD align=middle>&nbsp;</TD>
																			<TD align=middle><FONT face=Verdana color=#ffffff><B><FONT 
																				size=-1>decimales:&nbsp;<SELECT size=1 name=DECIMAL><OPTION
																					value=0 selected>0</OPTION><OPTION
																					value=2>2</OPTION></SELECT></FONT></B></FONT></TD></TR>
																					<TR align=middle>
																						<TD align=middle><B><FONT face=Verdana color=#ffffff size=-1>Tasa 
																						Anual Efectiva (E.A)</FONT></B></TD>
																						<TD align=middle><FONT face=Verdana color=#ffffff><INPUT tabIndex=3 
																							size=10 value=28.51 name=TAE></FONT></TD>
																							<TD align=middle>
																								<P align=left><B><FONT face=Verdana color=#ffffff size=-1>en 
																								%</FONT></B></P></TD>
																								<TD align=middle><FONT face=Verdana color=#ffffff size=-2>NOTA: 
																									Consulte la tasa Para el cálculo en <A
																									href="http://www.coopcentral.com.co/">Indicadores
																								Económicos</A></FONT></TD></TR>
																								<TR align=middle>
																									<TD align=middle><B><FONT face=Verdana color=#ffffff size=-1>Número 
																									de cuotas:</FONT></B></TD>
																									<TD align=middle><FONT face=Verdana color=#ffffff><INPUT tabIndex=5 
																										size=10 value=" " name=PERIODO></FONT></TD>
																										<TD align=middle><B><FONT face=Verdana color=#ffffff 
																											size=-1>Períodos</FONT></B></TD>
																											<TD align=middle><FONT face=Verdana color=#ffffff><SELECT tabIndex=6 
																												size=1 name=CUOTA><OPTION value=1>ANUALES</OPTION><OPTION
																												value=2>SEMESTRALES</OPTION><OPTION
																												value=4>TRIMESTRALES</OPTION><OPTION value=12
																												selected>MENSUALES</OPTION></SELECT></FONT></TD></TR></TBODY></TABLE>&nbsp;

																												<CENTER>
																													<TABLE borderColorDark=#339933 cellPadding=4 width="100%" bgColor=#339933 
																													borderColorLight=#ffffff border=1>
																													<TBODY>
																														<TR align=middle>
																															<TD align=left><FONT face=Verdana color=#ffffff size=1><INPUT 
																																type=radio CHECKED value=FRANCES name=METODO><B>METODO CONSTANTE</B>
																																<BR><B>Anualidades constantes</B></FONT></TD>
																																<TD align=middle><FONT face=Verdana color=#ffffff size=1><INPUT 
																																	tabIndex=5 size=5 value=0 name=DIFERIDO><B>Periodos de
																																	Gracia</B></FONT></TD>
																																	<TD align=middle><FONT face=Verdana color=#ffffff size=1><INPUT 
																																		type=checkbox CHECKED value=ON name=INCARENCIA><B>Pago
																																		Interes</B></FONT></TD></TR>
																																		<TR>
																																			<TD><INPUT type=hidden value=ALEMAN name=METODO></TD>
																																			<TD></TD>
																																			<TD><INPUT tabIndex=5 type=hidden size=10 value=100.00
																																				name=RAZON></TD></TR></TBODY></TABLE></CENTER>
																																				<CENTER>
																																					<TABLE borderColorDark=#339933 cellPadding=4 width="100%" bgColor=#339933 
																																					borderColorLight=#ffffff border=1>
																																					<TBODY>
																																						<TR>
																																							<TD align=middle><FONT face=Verdana color=#ffffff size=1><INPUT 
																																								type=radio CHECKED value=V1
																																								name=VISTA><B>DETALLE&nbsp;</B></FONT></TD>
																																								<TD align=middle><FONT face=Verdana color=#ffffff size=1><INPUT 
																																									type=radio value=V2 name=VISTA><B>RESUMEN&nbsp;</B></FONT></TD>
																																									<TD><FONT face=Verdana color=#ffffff size=1><INPUT onclick=calcula(form) type=button value="                 CALCULAR                  " name=B1></FONT></TD>
																																									<TD><FONT face=Verdana color=#ffffff size=1><INPUT type=reset value=ANULAR name=B2></FONT></TD></TR></TBODY></TABLE></CENTER></FORM></TD></TR></TBODY></TABLE><BR><BR><!-- FIN GOOGLE - -->
																																									href="javascript:close()"><FONT face=Verdana color=#007bce 
																																									size=2><B><BR><BR><BR>Cerrar esta página</B></FONT></A><FONT face=Verdana
																																									color=#007bce size=2> <BR><FONT face=Verdana color=#000000 size=1><BR>© 
																																									</FONT></FONT><FONT face=Verdana color=#0000ff 
																																									size=1></FONT></CENTER></BODY></HTML>