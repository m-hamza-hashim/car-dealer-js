var cars = {
    honda: {
        civic: {
            name: "Honda Civic",
            img: "images/civic.jpg",
            year: 2022,
            price: 2000000,
            colors: ["red", "black", "white"],
            doors: 4,
            wheels: 4
        },
        city: {
            name: "Honda City",
            year: 2021,
            price: 1800000,
            colors: ["blue", "silver", "gray"],
            doors: 4,
            wheels: 4
        },
        crv: {
            name: "Honda CR-V",
            year: 2020,
            price: 2500000,
            colors: ["green", "brown", "beige"],
            doors: 4,
            wheels: 4
        },
        accord: {
            name: "Honda Accord",
            year: 2019,
            price: 3000000,
            colors: ["white", "black", "silver"],
            doors: 4,
            wheels: 4
        },
        jazz: {
            name: "Honda Jazz",
            year: 2023,
            price: 1700000,
            colors: ["yellow", "orange", "white"],
            doors: 4,
            wheels: 4
        }
    },
    toyota: {
        camry: {
            name: "Toyota Camry",
            year: 2022,
            price: 2200000,
            colors: ["blue", "black", "silver"],
            doors: 4,
            wheels: 4
        },
        corolla: {
            name: "Toyota Corolla",
            year: 2021,
            price: 1900000,
            colors: ["red", "white", "gray"],
            doors: 4,
            wheels: 4
        },
        rav4: {
            name: "Toyota RAV4",
            year: 2020,
            price: 2600000,
            colors: ["green", "blue", "black"],
            doors: 4,
            wheels: 4
        },
        yaris: {
            name: "Toyota Yaris",
            year: 2023,
            price: 1500000,
            colors: ["silver", "white", "red"],
            doors: 4,
            wheels: 4
        },
        hilux: {
            name: "Toyota Hilux",
            year: 2021,
            price: 2800000,
            colors: ["black", "white", "gray"],
            doors: 4,
            wheels: 4
        }
    },
    ford: {
        mustang: {
            name: "Ford Mustang",
            year: 2022,
            price: 3500000,
            colors: ["red", "black", "yellow"],
            doors: 2,
            wheels: 4
        },
        focus: {
            name: "Ford Focus",
            year: 2021,
            price: 2000000,
            colors: ["blue", "silver", "white"],
            doors: 4,
            wheels: 4
        },
        escape: {
            name: "Ford Escape",
            year: 2020,
            price: 2700000,
            colors: ["green", "gray", "black"],
            doors: 4,
            wheels: 4
        },
        ranger: {
            name: "Ford Ranger",
            year: 2023,
            price: 3100000,
            colors: ["brown", "white", "silver"],
            doors: 4,
            wheels: 4
        },
        explorer: {
            name: "Ford Explorer",
            year: 2022,
            price: 3800000,
            colors: ["black", "blue", "gray"],
            doors: 4,
            wheels: 4
        }
    },
    bmw: {
        series3: {
            name: "BMW 3 Series",
            year: 2022,
            price: 4000000,
            colors: ["black", "white", "gray"],
            doors: 4,
            wheels: 4
        },
        series5: {
            name: "BMW 5 Series",
            year: 2021,
            price: 5000000,
            colors: ["blue", "black", "silver"],
            doors: 4,
            wheels: 4
        },
        x3: {
            name: "BMW X3",
            year: 2020,
            price: 4500000,
            colors: ["green", "white", "gray"],
            doors: 4,
            wheels: 4
        },
        x5: {
            name: "BMW X5",
            year: 2023,
            price: 6000000,
            colors: ["black", "blue", "white"],
            doors: 4,
            wheels: 4
        },
        i3: {
            name: "BMW i3",
            year: 2021,
            price: 3500000,
            colors: ["white", "silver", "blue"],
            doors: 4,
            wheels: 4
        }
    },
    audi: {
        a4: {
            name: "Audi A4",
            year: 2022,
            price: 4200000,
            colors: ["gray", "black", "white"],
            doors: 4,
            wheels: 4
        },
        a6: {
            name: "Audi A6",
            year: 2021,
            price: 5500000,
            colors: ["blue", "black", "silver"],
            doors: 4,
            wheels: 4
        },
        q5: {
            name: "Audi Q5",
            year: 2020,
            price: 4800000,
            colors: ["green", "white", "gray"],
            doors: 4,
            wheels: 4
        },
        q7: {
            name: "Audi Q7",
            year: 2023,
            price: 6500000,
            colors: ["black", "blue", "white"],
            doors: 4,
            wheels: 4
        },
        tt: {
            name: "Audi TT",
            year: 2021,
            price: 3800000,
            colors: ["white", "silver", "blue"],
            doors: 2,
            wheels: 4
        }
    }
};

var dropdowns = document.getElementsByClassName("dropdown-menu"), cards = document.getElementsByClassName("cards")[0];

for (var key1 in cars) {
    for (var key2 in cars[key1]) {
        cards.innerHTML += `<div class="card">
        <div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
          <img src="${cars[key1][key2].img}" class="img-fluid"/>
          <a href="#!">
            <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">${cars[key1][key2].name.toUpperCase()}</h5>
          <p class="card-text">Year: ${cars[key1][key2].year}</p>
          <p class="card-text">$ ${cars[key1][key2].price}</p>
          <p class="card-text">Colors: ${cars[key1][key2].colors}</p>
          <p class="card-text">Doors: ${cars[key1][key2].doors}</p>
          <p class="card-text">Wheels: ${cars[key1][key2].wheels}</p>
        </div>
      </div>`
    }
}


