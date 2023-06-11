POST /api/v1/jugadors // Afegir un jugador
POST /api/v1/partides // Afegir una partida

GET /api/v1/jugadors // Obtenir tots els jugadors
GET /api/v1/partides // Obtenir totes les partides

GET /api/v1/jugadors/[ID] // Obtenir la informació d'un jugadors específic
GET /api/v1/partides/[ID] // Obtenir la informació d'una partida específica

PATCH /api/v1/jugadors/[ID] // Modificar un jugador
PATCH /api/v1/partides/[ID] // Modificar una partida

DELETE /api/v1/jugadors/[ID] // Esborrar un jugador
DELETE /api/v1/partides/[ID] // Esborrar una partida

GET /api/v1/jugadors/[ID]/partides // Obtenir la llista completa de totes les partides que ha participat un jugador específic.

GET /api/v1/jugadors/[ID]/partides?posicio=[WHITE|BLACK] // Filtrar les partides d'un jugador en funció de la posició en la que ha jugat
GET /api/v1/jugadors/[ID]/partides?data=[DATA] // Filtrar les partides d'un jugador en funció de la data d'aquestes
GET /api/v1/jugadors/[ID]/partides?posicio=[WHITE|BLACK]&data=[DATA] // Combinar els filtres anteriors per obtenir una llista de partides que compleixen ambdós filtres

