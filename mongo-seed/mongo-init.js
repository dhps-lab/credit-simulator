print('Starting #################################################################################')
db = db.getSiblingDB('credit-simulator');

db.customers.insertMany(
  [
    {
      "name": "Juan Pérez",
      "credit_profile": "AAA",
      "borrowing_capacity": 200000,
      "dni": "123453",
      "birthdate": "1990-03-31",
      "offers": [
        {
          "amount": 5000000,
          "state": "activo"
        },
        {
          "amount": 50000000,
          "state": "activo"
        }
      ],
      "simulations": [
        {
          "amount": 12000000,
          "months": 24,
          "insurance_amount": 4020,
          "base_payment": 100500,
          "date": "2025-03-16T08:26:15.152Z"
        }
      ]
    },
    {
      "name": "María López",
      "credit_profile": "BAA",
      "borrowing_capacity": 150000,
      "dni": "789012",
      "birthdate": "1985-06-20",
      "offers": [
        {
          "amount": 10000000,
          "state": "desembolsado"
        }
      ],
      "simulations": [
        {
          "amount": 8000000,
          "months": 36,
          "insurance_amount": 3200,
          "base_payment": 85000,
          "date": "2025-02-20T10:15:30.200Z"
        }
      ]
    },
    {
      "name": "Carlos Méndez",
      "credit_profile": "AA",
      "borrowing_capacity": 180000,
      "dni": "456789",
      "birthdate": "1975-09-15",
      "offers": [
        {
          "amount": 7500000,
          "state": "inactivo"
        }
      ],
      "simulations": [
        {
          "amount": 5000000,
          "months": 12,
          "insurance_amount": 2500,
          "base_payment": 92000,
          "date": "2025-01-10T15:45:10.400Z"
        }
      ]
    }
  ]
)
db.parameters.insertMany(
  [
    {
      "credit_profiles": [
        {
          "name": "AAA",
          "interest_rate": [
            {
              "min_amount": 0,
              "max_amount": 7000000,
              "value": 23.45
            },
            {
              "min_amount": 7000000,
              "max_amount": 15000000,
              "value": 20.10
            },
            {
              "min_amount": 15000000,
              "max_amount": 50000000,
              "value": 17.60
            },
            {
              "min_amount": 50000000,
              "max_amount": 80000000,
              "value": 15.10
            },
            {
              "min_amount": 80000000,
              "value": 13.10
            }
          ]
        },
        {
          "name": "AA",
          "interest_rate": [
            {
              "min_amount": 0,
              "max_amount": 7000000,
              "value": 24.95
            },
            {
              "min_amount": 7000000,
              "max_amount": 15000000,
              "value": 24.00
            },
            {
              "min_amount": 15000000,
              "max_amount": 50000000,
              "value": 21.30
            },
            {
              "min_amount": 50000000,
              "max_amount": 80000000,
              "value": 18.50
            },
            {
              "min_amount": 80000000,
              "value": 16.50
            }
          ]
        },
        {
          "name": "A",
          "interest_rate": [
            {
              "min_amount": 0,
              "max_amount": 7000000,
              "value": 25.50
            },
            {
              "min_amount": 7000000,
              "max_amount": 15000000,
              "value": 25.30
            },
            {
              "min_amount": 15000000,
              "max_amount": 50000000,
              "value": 23.80
            },
            {
              "min_amount": 50000000,
              "max_amount": 80000000,
              "value": 21.30
            },
            {
              "min_amount": 80000000,
              "value": 19.30
            }
          ]
        },
        {
          "name": "BAA",
          "interest_rate": [
            {
              "min_amount": 0,
              "max_amount": 7000000,
              "value": 26.10
            },
            {
              "min_amount": 7000000,
              "max_amount": 15000000,
              "value": 26.10
            },
            {
              "min_amount": 15000000,
              "max_amount": 50000000,
              "value": 26.10
            },
            {
              "min_amount": 50000000,
              "max_amount": 80000000,
              "value": 26.10
            },
            {
              "min_amount": 80000000,
              "value": 26.10
            }
          ]
        }
      ],
      "offer_states": [
        "activo",
        "inactivo",
        "desembolsado"
      ],
      "terms": [
        12,
        24,
        36,
        48,
        60
      ],
      "ranges_insurance_fee": [
        {
          "min_age": 19,
          "max_age": 30,
          "percentage": 3
        },
        {
          "min_age": 31,
          "max_age": 60,
          "percentage": 4
        },
        {
          "min_age": 61,
          "max_age": 70,
          "percentage": 5
        }
      ]
    }
  ]
  );

  print("Data parameters has been written to the collection");

  print('End process #################################################################################')