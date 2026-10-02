function setup() {
  createCanvas(1200, 400);
  noLoop();
}

function draw() {
  background(11, 15, 25); // Fondo azul muy oscuro / estilo noche

  // Configuración de texto para los títulos
  fill(226, 232, 240);
  textSize(13);
  textFont('sans-serif');
  textAlign(CENTER);

  drawCasitaModerna(100, 150);
  text("1. Casita (Moderna)", 100, 320);

  drawHonguitoMagico(300, 150);
  text("2. Honguito (Mágico)", 300, 320);

  drawEstrellaNeon(500, 150);
  text("3. Estrella (Neon)", 500, 320);

  drawLunaMisticaGradiente(700, 150);
  text("4. Luna (Gradiente Azul)", 700, 320);

  drawConsolaPortatil(900, 150);
  text("5. Libre (Consola)", 900, 320);

  drawZorritoCETYSV2(1100, 150);
  text("6. Extra: Zorrito CETYS", 1100, 320);
}

// -------------------------------------------------------------
// 1. CASITA MODERNA (Tonos cálidos y lilas)
// -------------------------------------------------------------
function drawCasitaModerna(x, y) {
  push();
  translate(x, y);

  // Sombra suave en la base
  noStroke();
  fill(0, 0, 0, 40);
  ellipse(0, 92, 110, 18);

  // Pared Principal (Rosa pálido / Lila)
  fill(238, 210, 218);
  stroke(40, 30, 50);
  strokeWeight(2);
  rect(-45, -5, 90, 95, 4);

  // Techo Asimétrico Moderno (Azul Oscuro/Indigo)
  fill(49, 46, 129);
  triangle(-60, -5, 0, -65, 55, -5);

  // Puerta Minimalista (Naranja Coral)
  fill(249, 115, 22);
  rect(-12, 35, 24, 55, 3);

  // Perilla dorada
  fill(253, 224, 71);
  noStroke();
  circle(6, 65, 5);

  // Ventana circular moderna
  stroke(40, 30, 50);
  strokeWeight(2);
  fill(147, 197, 253);
  circle(0, -25, 34);
  line(-17, -25, 17, -25);
  line(0, -42, 0, -8);

  pop();
}

// -------------------------------------------------------------
// 2. HONGUITO MÁGICO (Tonos Violeta y Turquesa)
// -------------------------------------------------------------
function drawHonguitoMagico(x, y) {
  push();
  translate(x, y);

  // Tallo
  fill(233, 213, 255);
  stroke(30, 20, 50);
  strokeWeight(2);
  rect(-22, 10, 44, 70, 18);

  // Sombrero Violeta Intenso
  fill(126, 34, 206);
  arc(0, 15, 115, 110, PI, TWO_PI, CHORD);

  // Pecas Turquesa Brilantes
  fill(45, 212, 191);
  noStroke();
  circle(0, -20, 18);
  circle(-30, -5, 12);
  circle(30, -5, 12);
  circle(-15, -38, 9);
  circle(15, -38, 9);

  // Ojitos tiernos
  fill(30, 20, 50);
  ellipse(-9, 38, 6, 10);
  ellipse(9, 38, 6, 10);
  fill(255);
  circle(-10, 35, 2);
  circle(8, 35, 2);

  // Sonrisa
  noFill();
  stroke(30, 20, 50);
  strokeWeight(1.5);
  arc(0, 45, 10, 8, 0, PI);

  pop();
}

// -------------------------------------------------------------
// 3. ESTRELLA NEÓN (Estilo Cyan)
// -------------------------------------------------------------
function drawEstrellaNeon(x, y) {
  push();
  translate(x, y);

  // Resplandor exterior de la estrella
  let ctx = drawingContext;
  ctx.save();
  ctx.shadowColor = "rgba(6, 182, 212, 0.6)";
  ctx.shadowBlur = 22;

  fill(34, 211, 238);
  stroke(255);
  strokeWeight(2);

  beginShape();
  let points = 5;
  let outerRadius = 55;
  let innerRadius = 22;
  for (let i = 0; i < points * 2; i++) {
    let r = i % 2 === 0 ? outerRadius : innerRadius;
    let angle = (i * PI) / points - HALF_PI;
    let px = cos(angle) * r;
    let py = sin(angle) * r;
    vertex(px, py);
  }
  endShape(CLOSE);
  ctx.restore();

  pop();
}

// -------------------------------------------------------------
// 4. LUNA MÍSTICA (GRADIENTE RADIAL AZUL A PLATEADO)
// -------------------------------------------------------------
function drawLunaMisticaGradiente(x, y) {
  push();
  translate(x, y);

  let ctx = drawingContext;
  
  // Gradiente Radial Místico
  let gradient = ctx.createRadialGradient(-15, -15, 2, 0, 0, 65);
  gradient.addColorStop(0, "#ffffff");   // Centro blanco puro
  gradient.addColorStop(0.4, "#a5f3fc"); // Azul cian claro
  gradient.addColorStop(0.8, "#818cf8"); // Indigo / Violeta
  gradient.addColorStop(1, "#312e81");   // Azul noche profundo

  ctx.save();
  ctx.beginPath();
  ctx.arc(0, 0, 52, 0, Math.PI * 2);
  ctx.arc(24, -16, 44, 0, Math.PI * 2, true); // Recorte para formar la creciente
  ctx.closePath();

  ctx.fillStyle = gradient;
  ctx.shadowColor = "rgba(129, 140, 248, 0.5)";
  ctx.shadowBlur = 25;
  ctx.fill();
  ctx.restore();

  pop();
}

// -------------------------------------------------------------
// 5. LIBRE (CONSOLA PORTÁTIL RETRO)
// -------------------------------------------------------------
function drawConsolaPortatil(x, y) {
  push();
  translate(x, y);

  // Cuerpecito de la consola (Púrpura retro)
  fill(109, 40, 217);
  stroke(238, 242, 255);
  strokeWeight(2);
  rect(-45, -55, 90, 110, 12);

  // Pantalla
  fill(30, 41, 59);
  rect(-35, -45, 70, 48, 6);

  // Pantalla encendida
  fill(52, 211, 153);
  rect(-28, -40, 56, 38, 3);

  // D-Pad (Cruceta de control)
  fill(30, 27, 75);
  noStroke();
  rect(-28, 20, 20, 7, 2);
  rect(-21, 13, 7, 20, 2);

  // Botones A/B
  fill(244, 63, 94);
  circle(24, 20, 11);
  fill(251, 146, 60);
  circle(12, 28, 11);

  // Botones Select / Start
  stroke(30, 27, 75);
  strokeWeight(2);
  line(-10, 44, -3, 44);
  line(2, 44, 9, 44);

  pop();
}

// -------------------------------------------------------------
// 6. EXTRA: ZORRITO CETYS (Estilo Limpio Vectorial)
// -------------------------------------------------------------
function drawZorritoCETYSV2(x, y) {
  push();
  translate(x, y);
  strokeWeight(1.8);

  // Oreja Izquierda
  fill(234, 88, 12); // Naranja
  stroke(15, 23, 42); // Contorno azul oscuro
  triangle(-42, -12, -52, -62, -8, -32);
  fill(255);
  noStroke();
  triangle(-37, -17, -45, -52, -15, -30);

  // Oreja Derecha
  fill(234, 88, 12);
  stroke(15, 23, 42);
  triangle(42, -12, 52, -62, 8, -32);
  fill(255);
  noStroke();
  triangle(37, -17, 45, -52, 15, -30);

  // Cabeza (Base geométrica)
  stroke(15, 23, 42);
  fill(234, 88, 12);
  beginShape();
  vertex(-48, -18);
  vertex(0, -38);
  vertex(48, -18);
  vertex(58, 16);
  vertex(0, 64);
  vertex(-58, 16);
  endShape(CLOSE);

  // Pelaje Blanco inferior
  fill(255);
  noStroke();
  beginShape();
  vertex(-58, 16);
  vertex(-22, 12);
  vertex(0, 32);
  vertex(22, 12);
  vertex(58, 16);
  vertex(0, 64);
  endShape(CLOSE);

  // Detalle Dorado CETYS en el centro de la frente
  fill(250, 204, 21);
  triangle(-16, -34, 0, -8, 16, -34);

  // Ojos rasgados
  fill(15, 23, 42);
  beginShape();
  vertex(-32, -4);
  vertex(-14, 6);
  vertex(-28, 12);
  endShape(CLOSE);

  beginShape();
  vertex(32, -4);
  vertex(14, 6);
  vertex(28, 12);
  endShape(CLOSE);

  // Brillo de ojos
  fill(255);
  circle(-24, 3, 2.5);
  circle(24, 3, 2.5);

  // Nariz
  fill(15, 23, 42);
  triangle(-7, 52, 7, 52, 0, 62);

  pop();
}
