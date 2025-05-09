1. Ik begrijp het verschil tussen client-side JavaScript en server-side JavaScript en wanneer ik welke het handigst in kan zetten
🤓 2 pnt
- Ik heb sever-side en client0side js gebruikt. In de server maakt je routes aan en in de client-side zet je de rest van js in. Als je de pagina niet wil laten laden dant zet je in de client-side en dan zet je ook de succes en loading state in. Als je dan niet doet moet de succes state in de server-side. 

2. Ik heb een strategie voor server-side JavaScript debuggen, voor client-side JavaScript debuggen, en voor Liquid code debuggen 
🫣 1 pnt
- Ik gebruik vooral console.log om te kijken wat die mee geeft en kijk ook in de devtools. 

3. Ik kan GET en POST routes aanmaken en request parameters gebruiken 
🤓 2 pnt
- [GET](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/server.js#L19)
- [POST](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/server.js#L123)

4. Ik kan server-side JSON data fetchen uit een REST API
🍗 3 pnt
- [fetch](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/server.js#L81) voor de pagina van de opgeslagen cadeau's. 

5. Ik kan data uit een REST API filteren of sorteren
🤓 2 pnt
- [filteren](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/server.js#L64C3-L64C62)
 
6. Ik snap wat het async keyword doet in JavaScript code
🤓 2 pnt
- de async key heeft de functie om code die een await hebben te laten wachten zodat het geladen is. 

7. Ik weet wat het doel is van een try/catch block en kan het gebruiken bij het parsen van JSON
🫣 0 pnt

8. Ik kan met een client-side fetch een werkend formulier verrijken
🤓 2 pnt
- Met de client-side heb ik een de post werkend gemaakt en de lading state toegevoegd. De img veranderd als die opgeslagen of niet opgeslagen is.
- [client-side](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/index.js)

9. Ik kan multi-page en single-page view transitions inzetten en aanpassen
🤓 2 pnt voor multi-page ben nog niet aan de single-page toegekomen.
- multi-page [HTML home](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/index.liquid#L3), [HTML favourieten](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/favourite.liquid#L2) en [CSS](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L8-L44)

10. Ik kan verschillende manieren van responsive images uitleggen en toepassen
🍗 3 pnt
- [responsive images](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/partials/card.liquid#L4-L18)

11. Ik weet hoe ik de resultaten van een performance audit moet interpreteren en hoe ik performance problemen kan oplossen
🤓 2 pnt
- Je kan een lighthouse test, webpage test en Pagespeed test doen om te testen of de performance goed zijn. Je krijgt dan resultaten en zit wat je kan verbeteren. 
- [Verbeteringen](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/partials/card.liquid#L15). Bij de img een widht en height neerzetten.

12. Ik weet hoe ik met client-side JS de UX kan verbeteren, rekening houdend met progressive enhancement
🤓 2 pnt
- [loading state](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/index.js#L10-L13)

13. Ik weet hoe ik binnen HTML, CSS en client-side JS nieuwe technieken toe kan passen, rekening houdend met oudere browsers
🤓 2 pnt
- [@supports](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L684)

14. Ik weet wat objecten, arrays, strings, loops, variabelen, functies en parameters zijn, en kan die in JavaScript inzetten
🤓 2 pnt
- [object](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/index.js#L28)
- [loop](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/index.js#L9)

15. Ik weet wat geavanceerdere concepten in JavaScript zijn, zoals closures, promises, callbacks, scope en de event loop
🫣 0 pnt
 
16. Ik kan via GitHub met feature branches werken, pull requests aanmaken, reviewen en mergen
🍗 3 pnt

17. Ik weet hoe ik formulieren pro-actief kan valideren met client-side code
🫣 0 pnt

18. Ik weet de eerste regel van ARIA, en wat dat betekent voor hoe ik HTML schrijf
🤓 2 pnt
- Alle ongebruikte HTML uit je code halen. 

19. Ik weet wat layout shifts zijn, door wat ze veroorzaakt worden, hoe ik ze kan meten en hoe ik ze kan oplossen
🍗 3 pnt
- je kan het oplossen om een height en width toe te voegen zo weet de browser welke grote alles heeft en kan die al plek vrij maken. Layou shifts zijn als iets op je website verspringt als alles goed geladen is. 

20. Ik weet wat de Core Web Vitals zijn, hoe ik die kan meten, en hoe ik de cijfers moet interpreteren
🫣 1 pnt
- [height en width](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L457-L459)
 
21. Ik weet hoe perceived performance invloed heeft op de beleving van een gebruiker, en ik heb de ontwerp- en code vaardigheden om die toe te passen
🤓 2 pnt
- [lazy loading](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/partials/card.liquid#L8) 
- [responsive images](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/views/partials/card.liquid#L4-L18)
- [height en width](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L457-L459)

22. Ik kan UI states in meerdere lagen van progressive enhancement inzetten om de UX te verbeteren
🤓 2 pnt
- [loading state](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/index.js#L13)
- [error pagina](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/server.js#L157-L160) 

23. Ik kan een UI leuker en prettiger maken, zonder de core functionaliteit uit het oog te verliezen
🫣 1 pnt
- [view transitions](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L8-L44)
- [hover](https://github.com/nadiachaja/user-experience-enhanced-website/blob/main/public/styles.css#L572-L574)

24. Ik kan scroll-driven animations inzetten om de UI beter te maken
🫣 0 pnt

25. Ik weet hoe ik verschillende vormen van feature detection in kan zetten in HTML, in CSS en in client-side JS
🫣 0 pnt

39/75 pnt