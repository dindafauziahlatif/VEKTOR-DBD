var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_KELURAHANPASIRKALIKI_1 = new ol.format.GeoJSON();
var features_KELURAHANPASIRKALIKI_1 = format_KELURAHANPASIRKALIKI_1.readFeatures(json_KELURAHANPASIRKALIKI_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KELURAHANPASIRKALIKI_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHANPASIRKALIKI_1.addFeatures(features_KELURAHANPASIRKALIKI_1);
var lyr_KELURAHANPASIRKALIKI_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHANPASIRKALIKI_1, 
                style: style_KELURAHANPASIRKALIKI_1,
                popuplayertitle: "KELURAHAN PASIRKALIKI",
                interactive: true,
                title: '<img src="styles/legend/KELURAHANPASIRKALIKI_1.png" /> KELURAHAN PASIRKALIKI'
            });
var format_BUFFERED_2 = new ol.format.GeoJSON();
var features_BUFFERED_2 = format_BUFFERED_2.readFeatures(json_BUFFERED_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUFFERED_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUFFERED_2.addFeatures(features_BUFFERED_2);
var lyr_BUFFERED_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUFFERED_2, 
                style: style_BUFFERED_2,
                popuplayertitle: "BUFFERED ",
                interactive: true,
                title: '<img src="styles/legend/BUFFERED_2.png" /> BUFFERED '
            });
var format_TITIKJENTIK_3 = new ol.format.GeoJSON();
var features_TITIKJENTIK_3 = format_TITIKJENTIK_3.readFeatures(json_TITIKJENTIK_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIKJENTIK_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIKJENTIK_3.addFeatures(features_TITIKJENTIK_3);
var lyr_TITIKJENTIK_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TITIKJENTIK_3, 
                style: style_TITIKJENTIK_3,
                popuplayertitle: "TITIK JENTIK",
                interactive: true,
                title: '<img src="styles/legend/TITIKJENTIK_3.png" /> TITIK JENTIK'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_KELURAHANPASIRKALIKI_1.setVisible(true);lyr_BUFFERED_2.setVisible(true);lyr_TITIKJENTIK_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_KELURAHANPASIRKALIKI_1,lyr_BUFFERED_2,lyr_TITIKJENTIK_3];
lyr_KELURAHANPASIRKALIKI_1.set('fieldAliases', {'fid': 'fid', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'CIMAHI_ADM': 'CIMAHI_ADM', 'CIMAHI_A_1': 'CIMAHI_A_1', 'KECAMATAN': 'KECAMATAN', 'KELURAHAN': 'KELURAHAN', 'RW': 'RW', 'RT': 'RT', });
lyr_BUFFERED_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_TITIKJENTIK_3.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KELURAHANPASIRKALIKI_1.set('fieldImages', {'fid': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'CIMAHI_ADM': 'TextEdit', 'CIMAHI_A_1': 'TextEdit', 'KECAMATAN': 'TextEdit', 'KELURAHAN': 'TextEdit', 'RW': 'TextEdit', 'RT': 'TextEdit', });
lyr_BUFFERED_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_TITIKJENTIK_3.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KELURAHANPASIRKALIKI_1.set('fieldLabels', {'fid': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'CIMAHI_ADM': 'no label', 'CIMAHI_A_1': 'no label', 'KECAMATAN': 'no label', 'KELURAHAN': 'no label', 'RW': 'no label', 'RT': 'no label', });
lyr_BUFFERED_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TITIKJENTIK_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_TITIKJENTIK_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});