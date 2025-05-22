use seguritymz;

CREATE TABLE productos (
id INT auto_increment primary key,
nombre varchar(255) not null,
descripcion text,
imagen_url varchar(255)
);

INSERT INTO productos (nombre, descripcion, imagen_url)
VALUES ('DH-HAC-T1A21N-U-0280B 2mpx', ' Camara Tipo Domo 1080 Dahua
     Max. 30 fps@1080p.
     Iluminación IR inteligente.
     Distancia de iluminación de 20m.
     Lente fijo de 3.6 mm (2.8 mm,6 mm opcional).
     CVI/CVBS/AHD/TVI intercambiable.
     12 VDC.', 
     'gs://seguritymz.firebasestorage.app/IMG CAM/DH-HAC-T1A21N-U-0280B.png');
