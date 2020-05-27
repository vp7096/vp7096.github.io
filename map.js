 google.charts.load('current', {
        'packages':['geochart'],
        'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
      });
      google.charts.setOnLoadCallback(drawRegionsMap);

      function drawRegionsMap() {
        var data = google.visualization.arrayToDataTable([
          ['State', 'Total Cases'],
    ['Uttar Pradesh', 6724],
    ['Maharashtra', 54758],
    ['Bihar', 2968],
    ['West Bengal', 4009],
    ['Madhya Pradesh', 7024],
    ['Tamil Nadu', 17728],
    ['Rajasthan', 7645],
    ['Karnataka', 2405],
    ['Gujarat', 14829],
    ['Andhra Pradesh', 2983],
    ['Odisha', 1593],
    ['Telangana', 1991],
    ['Kerala', 964],
    ['Jharkhand', 426],
    ['Assam', 701],
    ['Punjab', 2106],
    ['Chhattisgarh', 360],
    ['Haryana', 1305],
    ['Jammu and Kashmir', 1759],
    ['Uttarakhand', 400],
    ['Himachal Pradesh', 247],
    ['Tripura', 232],
    ['Meghalaya', 20],
    ['Manipur', 39],
    ['Nagaland', 9],
    ['Goa', 67],
    ['Arunachal Pradesh', 2],
    ['Mizoram', 1],
    ['Sikkim', 1],
    ['Delhi', 15257],
    ['Puducherry', 49],
    ['Chandigarh', 278],
    ['Andaman and Nicobar Islands', 33],
    ['Dadra and Nagar Haveli', 2],
        ]);

        var options = {

     region: 'IN',
    displayMode: 'regions',
    resolution: 'provinces',
    colors: ['blue'],
        };

        var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

        chart.draw(data, options);
      }