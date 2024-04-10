document.addEventListener('DOMContentLoaded', function() {
    const jsonData = [
        {
            "img_path": "ecimg/ccdr 2023-12-28 160017.839.JPG",
            "location": "Gilbert, Arizona",
            "date": "12/28/2023",
            "coordinates": "33.3528° N, 111.7890° W",
            "weather": "Sunny",
            "memory": "Visited a farm near my uncle's house and ate at a cafe that sold food made with organic produce."
        },
        {
            "img_path": "ecimg/ccdr 2023-12-30 143718.261.JPG",
            "location": "Phoenix, Arizona",
            "date": "12/30/2023",
            "coordinates": "33.5703° N, 111.5245° W",
            "weather": "Sunny",
            "memory": "Boat around Lake Saguaro"
        },
        {
            "img_path": "ecimg/ccdr 2023-12-08 123830.367.JPG",
            "location": "New York",
            "date": "12/08/2023",
            "coordinates": "40.7128° N, 74.0060° W",
            "weather": "Chilly, sunny",
            "memory": "Walked around downtown to take pictures for a project."
        },
        {
            "img_path": "ecimg/dfuns 2023-05-28 191533.687.JPG",
            "location": "Diani, Kenya",
            "date": "05/26/2023",
            "coordinates": "4.2798° S, 39.5947° E",
            "weather": "Sunny with clouds",
            "memory": "Went on a boat ride to a nearby sandbank and snorkeled on the way."
        },
        {
            "img_path": "ecimg/ccdr 2023-12-24 133658.713.JPG",
            "location": "Black Canyon, Arizona",
            "date": "12/24/2023",
            "coordinates": "34.0775° N, 112.1295° W",
            "weather": "Sunny with clouds",
            "memory": "The drive to our Airbnb for Christmas"
        },
        {
            "img_path": "ecimg/ccdr 2024-03-14 123240.681.JPG",
            "location": "Cancun, Mexico",
            "date": "3/14/2024",
            "coordinates": "21.1619° N, 86.8515° W",
            "weather": "Sunny",
            "memory": "Day trip to Isla Mujeres on a catamaran!"
        },
        {
            "img_path": "ecimg/dqs 2024-03-06 165149.078.JPG",
            "location": "Bangalore, India",
            "date": "7/11/2023",
            "coordinates": "12.9716° N, 77.5946° E",
            "weather": "Cloudy",
            "memory": "Drove around the city in a TukTuk."
        },
        {
            "img_path": "ecimg/ccdr 2023-12-25 143157.064.JPG",
            "location": "Cornville, Arizona",
            "date": "12/25/2023",
            "coordinates": "34.7178° N, 111.9215° W",
            "weather": "Chilly, sunny",
            "memory": "Walked around a creek that passed through our Airbnb for Christmas"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-02 131530.421.JPG",
            "location": "Los Angeles, California",
            "date": "01/02/2024",
            "coordinates": "34.1184° N, 118.3004° W",
            "weather": "Clear",
            "memory": "Hiked to Griffith Observatory"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-04 125604.305.JPG",
            "location": "Los Angeles, California",
            "date": "01/09/2024",
            "coordinates": "34.1184° N, 118.3004° W",
            "weather": "Sunny",
            "memory": "Visited the Grand Central Market"
        },
        {
            "img_path": "ecimg/ccdr 2023-12-30 153659.899.JPG",
            "location": "Phoenix, Arizona",
            "date": "12/30/2023",
            "coordinates": "33.5703° N, 111.5245° W",
            "weather": "Sunny",
            "memory": "Lunch after Boating around Lake Saguaro"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-04 124348.894.JPG",
            "location": "Los Angeles, California",
            "date": "01/04/2024",
            "coordinates": "34.1184° N, 118.3004° W",
            "weather": "Sunny",
            "memory": "Rode a furnicular in Downtown LA"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-02 154808.577.JPG",
            "location": "Beverly Hills, CA",
            "date": "01/02/2024",
            "coordinates": "34.0736° N, 118.4004° W",
            "weather": "Clear",
            "memory": "Drove past Beverly Hills"
        },
        {
            "img_path": "ecimg/dqs 2024-03-06 165150.572.JPG",
            "location": "Bangalore, India",
            "date": "06/16/2023",
            "coordinates": "12.9716° N, 77.5946° E",
            "weather": "Cloudy",
            "memory": "Drove around the city after landing when I moved there."
        },
        {
            "img_path": "ecimg/ccdr 2024-01-07 164140.103.JPG",
            "location": "Port Hueneme, CA",
            "date": "01/05/2024",
            "coordinates": "34.1478° N, 119.1951° W",
            "weather": "Clear",
            "memory": "Went to watch the sunset at the pier"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-12 125250.683.JPG",
            "location": "Beverly Hills, CA",
            "date": "01/10/2024",
            "coordinates": "34.0736° N, 118.4004° W",
            "weather": "Sunny",
            "memory": "Walked around Rodeo Drive."
        },
        {
            "img_path": "ecimg/ccdr 2024-01-13 130952.193.JPG",
            "location": "Santa Barbara, CA",
            "date": "01/14/2024",
            "coordinates": "34.4208° N, 119.6982° W",
            "weather": "Sunny",
            "memory": "View of the Pacific Ocean at Santa Barbara"
        },
        {
            "img_path": "ecimg/dqs 2024-03-06 165614.306.JPG",
            "location": "Delhi, India",
            "date": "07/19/2023",
            "coordinates": "28.7041° N, 77.1025° E",
            "weather": "Cloudy",
            "memory": "Visited Khan market with my friends. "
        },
        {
            "img_path": "ecimg/ccdr 2024-01-13 132020.516.JPG",
            "location": "Santa Barbara, CA",
            "date": "01/14/2024",
            "coordinates": "34.4208° N, 119.6982° W",
            "weather": "Sunny",
            "memory": "Cliffs at Santa Barbara"
        },
        {
            "img_path": "ecimg/ccdr 2023-12-28 160037.980.JPG",
            "location": "Gilbert, Arizona",
            "date": "12/28/2023",
            "coordinates": "33.3528° N, 111.7890° W",
            "weather": "Sunny",
            "memory": "Visited a farm near my uncle's house."
        },
        {
            "img_path": "ecimg/ccdr 2024-01-04 131555.098.JPG",
            "location": "Los Angeles, California",
            "date": "01/12/2024",
            "coordinates": "34.1184° N, 118.3004° W",
            "weather": "Sunny",
            "memory": "Walked around Downtown LA"
        },
        {
            "img_path": "ecimg/dqs 2024-03-02 195128.268.JPG",
            "location": "Delhi, India",
            "date": "07/15/2023",
            "coordinates": "28.7041° N, 77.1025° E",
            "weather": "Sunny",
            "memory": "Visited Qutub minar "
        },
        {
            "img_path": "ecimg/ccdr 2023-12-26 112923.010.JPG",
            "location": "Cornville, Arizona",
            "date": "12/25/2023",
            "coordinates": "34.7178° N, 111.9215° W",
            "weather": "Chilly, sunny",
            "memory": "Walked around Oak Creek"
        },
        {
            "img_path": "ecimg/dqs 2024-03-26 095451.386.JPG",
            "location": "Cancun, Mexico",
            "date": "3/14/2024",
            "coordinates": "21.1619° N, 86.8515° W",
            "weather": "Sunny",
            "memory": "The catamaran docks at Isla Mujeres"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-14 163543.600.JPG",
            "location": "Malibu, CA",
            "date": "01/14/2024",
            "coordinates": "34.0381° N, 118.6923° W",
            "weather": "Clear",
            "memory": "Went to El Matador beach in Malibu for sunset on my last day in LA."
        },
        {
            "img_path": "ecimg/ccdr 2024-02-17 152901.194.JPG",
            "location": "New York",
            "date": "02/10/2024",
            "coordinates": "40.7128° N, 74.0060° W",
            "weather": "Chilly, sunny",
            "memory": "Washington square park after snow day"
        },
        {
            "img_path": "ecimg/dfuns 2023-06-06 184701.850.JPG",
            "location": "Nairobi, Kenya",
            "date": "06/12/2023",
            "coordinates": "1.2921° S, 36.8219° E",
            "weather": "Sunny",
            "memory": "Visited a giraffe santuary and got to feed them!"
        },
        {
            "img_path": "ecimg/dfuns 2023-10-01 172521.168.JPG",
            "location": "New York",
            "date": "10/12/2023",
            "coordinates": "40.7128° N, 74.0060° W",
            "weather": "Sunny",
            "memory": "Explored Chinatown for a class project."
        },
        {
            "img_path": "ecimg/dqs 2024-03-06 165628.891.JPG",
            "location": "New York",
            "date": "09/08/2023",
            "coordinates": "40.7128° N, 74.0060° W",
            "weather": "Sunny",
            "memory": "Weekend farmer's market in the East Village"
        },
        {
            "img_path": "ecimg/dqs 2024-03-26 095451.046.JPG",
            "location": "Cancun, Mexico",
            "date": "3/16/2024",
            "coordinates": "21.1619° N, 86.8515° W",
            "weather": "Sunny",
            "memory": "Sunset stroll on Playa Gaviota Azul"
        },
        {
            "img_path": "ecimg/dfuns 2023-05-28 170228.391.JPG",
            "location": "Mombasa, Kenya",
            "date": "06/05/2023",
            "coordinates": "4.0435° S, 39.6682° E",
            "weather": "Sunny",
            "memory": "Walking around Mombasa's Portuegese fort"
        },
        {
            "img_path": "ecimg/ccdr 2024-01-05 151351.577.JPG",
            "location": "Los Angeles, California",
            "date": "01/05/2024",
            "coordinates": "34.1184° N, 118.3004° W",
            "weather": "Clear",
            "memory": "Spent a day at Universal Studios Hollywood"
        }
    ];

    const tbody = document.getElementById('table-body');
let currentOpenRow = null;

jsonData.forEach(function(data, index) {
    const row = document.createElement('tr');
    row.classList.add('expandable-row');
    row.dataset.index = index;

    const columns = [
        data.date,
        data.location,
        data.coordinates,
        data.weather,
    ];

    columns.forEach(function(value, columnIndex) {
        const cell = document.createElement('td');
        if (columnIndex === 1) { 
            cell.textContent = value;
            row.appendChild(cell);

            const imageCell = document.createElement('td');
            const image = document.createElement('img');
            image.src = data.img_path;
            image.alt = 'Image';
            image.style.height = '50px'; 
            imageCell.appendChild(image);
            row.appendChild(imageCell);
        } else {
            cell.textContent = value;
            row.appendChild(cell);
        }
    });


        tbody.appendChild(row);

        const detailsRow = document.createElement('tr');
        detailsRow.classList.add('expandable-details');
        detailsRow.style.display = 'none';

        const detailsCell1 = document.createElement('td');
detailsCell1.colSpan = 1;
detailsRow.appendChild(detailsCell1);

const detailsCell2 = document.createElement('td');
detailsCell2.colSpan = 1;
detailsRow.appendChild(detailsCell2);

const detailsCell3 = document.createElement('td');
detailsCell3.colSpan = 1;

const image = document.createElement('img');
image.src = data.img_path;
image.alt = 'Image';
image.style.width = '400px'; 

image.onerror = function() {
    console.error('Error loading image:', data.img_path);
};

detailsCell3.appendChild(image);
detailsRow.appendChild(detailsCell3);

const detailsCell4 = document.createElement('td');
detailsCell4.colSpan = 1;
detailsCell4.textContent = data.memory; 
detailsRow.appendChild(detailsCell4);

const detailsCell5 = document.createElement('td');
detailsCell5.colSpan = 1;
// detailsCell4.textContent = data.memory; 
detailsRow.appendChild(detailsCell5);

tbody.appendChild(detailsRow);

        row.addEventListener('click', function() {
            if (currentOpenRow && currentOpenRow !== detailsRow) {
                currentOpenRow.style.display = 'none';
            }
            detailsRow.style.display = detailsRow.style.display === 'none' ? 'table-row' : 'none';
            currentOpenRow = detailsRow.style.display === 'none' ? null : detailsRow;
        });
    });
});

window.addEventListener('scroll', function() {
    var h2 = document.querySelector('h2');
    if (window.scrollY > 50) {
        h1.style.opacity = '0.4';
    } else {
        h1.style.opacity = '1';
    }
});

window.addEventListener('scroll', function() {
    const h2 = document.querySelector('h2');
    const scrollPosition = window.scrollY;
    const triggerPosition = 100 * window.innerHeight / 100;

    if (scrollPosition >= triggerPosition) {
      h2.classList.add('fixed-h2');
    } else {
      h2.classList.remove('fixed-h2');
    }
  });

  document.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const scrollThreshold = windowHeight * 1;
    const opacityValue = Math.max(0, 1 - (scrollPosition / scrollThreshold));

    const filterTextElements = document.querySelectorAll(".filter-text");
    filterTextElements.forEach((element) => {
        element.style.opacity = opacityValue.toString();
    });
});