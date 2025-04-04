**1. ceil**
- {{ 1.2 | ceil }}
{{ 2.0 | ceil }}
{{ 183.357 | ceil }}

Output
2
2
184

Kon dit niet in mijn project gebruiken, omdat ik geen nummers heb. 

**2.new_to_br**
- {% capture string_with_newlines %}
   Wat je erin wilt 
    {% endcapture %}
    
    {{ string_with_newlines | newline_to_br }}

**3. last**
-     {{ item.name | split: " " | last }} (pakt het laatste woord)

**4. reverse**
- {% assign my_array = "prodcut1, prodcut2, prodcut3, prodcut4" | split: ", " %}
{{ my_array | reverse | join: ", " }}

Staat als prodcut4, prodcut3, prodcut2, prodcut1

**5. sum**
- {% assign total_quantity = collection.products | sum: "quantity" %}
{{ total_quantity }}