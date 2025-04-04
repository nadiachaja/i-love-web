1. 👉** Experiment 1: Ik wil alle studenten gesorteerd op name**
- https://fdnd.directus.app/items/person?fields=name&sort=name (sorteert op alfabetische volgorde)

2. 👉 Experiment 2: Ik wil alle names van studenten die een name hebben die begint met de letter D
- https://fdnd.directus.app/items/person?fields=name&sort=name&filter[name][_starts_with]=D

3. 👉 Experiment 3: Ik wil alle names van studenten die een name hebben die begint met de letter D of K
- https://fdnd.directus.app/items/person?fields=name&sort=name&filter[_or][0][name][_starts_with]=D&filter[_or][1][name][_starts_with]=K

4. 👉 Experiment 4: Ik wil alle names en birthdates van studenten die een birthdate hebben ingevuld
- https://fdnd.directus.app/items/person?fields=birthdate,name&filter[birthdate][_null]=false

5. 👉 Experiment 5: Ik wil alle names en birthdates van studenten met een birthdate in 2002
- https://fdnd.directus.app/items/person?fields=birthdate,name&filter[year(birthdate)][_eq]=2002

6. 👉 Experiment 6: Haal een lijst van alle unieke fav_tag op, en laat zien hoeveel mensen die tag hebben
- https://fdnd.directus.app/items/person?fields=fav_tag[_neg]=null&aggregate[count]=fav_tag&groupBy=fav_tag
