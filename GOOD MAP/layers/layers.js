var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_PriorityHabitats_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Priority Habitats<br />\
    <img src="styles/legend/PriorityHabitats_1_0.png" /> -9999<br />\
    <img src="styles/legend/PriorityHabitats_1_1.png" /> Rocky Mountain Alpine Dwarf-Shrubland<br />\
    <img src="styles/legend/PriorityHabitats_1_2.png" /> Inter-Mountain Basins Montane Sagebrush Steppe<br />\
    <img src="styles/legend/PriorityHabitats_1_3.png" /> Rocky Mountain Alpine Fell-Field<br />\
    <img src="styles/legend/PriorityHabitats_1_4.png" /> Rock Mountain Alpine Turf<br />\
    <img src="styles/legend/PriorityHabitats_1_5.png" /> Rocky Mountain Subalpine-Montane Mesic Meadow<br />\
    <img src="styles/legend/PriorityHabitats_1_6.png" /> Rocky Mountain Alpine Bedrock and Scree<br />\
    <img src="styles/legend/PriorityHabitats_1_7.png" /> Rocky Mountain Cliff Canyon and Massive Bedrock<br />\
    <img src="styles/legend/PriorityHabitats_1_8.png" /> Rocky Mountain Subalpine-Montane Riparian Woodland<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/PriorityHabitats_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-12219849.847628, 4362163.786943, -11324339.403221, 5089755.509214]
        })
    });
var format_eBirdHotspots_2 = new ol.format.GeoJSON();
var features_eBirdHotspots_2 = format_eBirdHotspots_2.readFeatures(json_eBirdHotspots_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_eBirdHotspots_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_eBirdHotspots_2.addFeatures(features_eBirdHotspots_2);
cluster_eBirdHotspots_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_eBirdHotspots_2
});
var lyr_eBirdHotspots_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_eBirdHotspots_2, 
                style: style_eBirdHotspots_2,
                popuplayertitle: 'eBird Hotspots',
                interactive: true,
                title: '<img src="styles/legend/eBirdHotspots_2.png" /> eBird Hotspots'
            });
var format_ColoradoBoundary_3 = new ol.format.GeoJSON();
var features_ColoradoBoundary_3 = format_ColoradoBoundary_3.readFeatures(json_ColoradoBoundary_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ColoradoBoundary_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ColoradoBoundary_3.addFeatures(features_ColoradoBoundary_3);
var lyr_ColoradoBoundary_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ColoradoBoundary_3, 
                style: style_ColoradoBoundary_3,
                popuplayertitle: 'Colorado Boundary',
                interactive: true,
                title: '<img src="styles/legend/ColoradoBoundary_3.png" /> Colorado Boundary'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PriorityHabitats_1.setVisible(true);lyr_eBirdHotspots_2.setVisible(true);lyr_ColoradoBoundary_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PriorityHabitats_1,lyr_eBirdHotspots_2,lyr_ColoradoBoundary_3];
lyr_eBirdHotspots_2.set('fieldAliases', {'field_1': 'field_1', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', 'field_8': 'field_8', 'field_9': 'field_9', 'field_10': 'field_10', });
lyr_ColoradoBoundary_3.set('fieldAliases', {'fid': 'fid', 'REGION': 'REGION', 'DIVISION': 'DIVISION', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'GEOID': 'GEOID', 'GEOIDFQ': 'GEOIDFQ', 'STUSPS': 'STUSPS', 'NAME': 'NAME', 'LSAD': 'LSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_eBirdHotspots_2.set('fieldImages', {'field_1': 'TextEdit', 'field_2': 'TextEdit', 'field_3': 'TextEdit', 'field_4': 'TextEdit', 'field_5': 'TextEdit', 'field_6': 'TextEdit', 'field_7': 'TextEdit', 'field_8': 'DateTime', 'field_9': 'Range', 'field_10': 'Range', });
lyr_ColoradoBoundary_3.set('fieldImages', {'fid': 'TextEdit', 'REGION': 'TextEdit', 'DIVISION': 'TextEdit', 'STATEFP': 'TextEdit', 'STATENS': 'TextEdit', 'GEOID': 'TextEdit', 'GEOIDFQ': 'TextEdit', 'STUSPS': 'TextEdit', 'NAME': 'TextEdit', 'LSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_eBirdHotspots_2.set('fieldLabels', {'field_1': 'no label', 'field_2': 'no label', 'field_3': 'no label', 'field_4': 'no label', 'field_5': 'no label', 'field_6': 'no label', 'field_7': 'header label - visible with data', 'field_8': 'no label', 'field_9': 'no label', 'field_10': 'no label', });
lyr_ColoradoBoundary_3.set('fieldLabels', {'fid': 'no label', 'REGION': 'no label', 'DIVISION': 'no label', 'STATEFP': 'no label', 'STATENS': 'no label', 'GEOID': 'no label', 'GEOIDFQ': 'no label', 'STUSPS': 'no label', 'NAME': 'no label', 'LSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_ColoradoBoundary_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});