
| Campo    | Tipo  |  Ejemplo  |        Reglas        |
|----------|-------|-----------|----------------------|
|    id    |entero |    2      |         >0           |
|  nombre  |string |   Ratón   |      obligatorio     |
|categoria |string |Periféricos|      obligatorio     |
|  precio  |decimal|   24.5    |         >0           |
|   stock  |entero |    0      |         >=0          |
| enOferta |boolean|   true    |  solo true o false   |
-------------------------------------------------------

<!--1. ¿Por qué campos tendría sentido **ordenar** la lista?-->
Para ordenar la lista tendría sentido hacerlo por el nombre en orden alfabetico o por el precio
<!--2. ¿Por qué campos tendría sentido **filtrar**?-->
Tendría sentido filtrarlo por la categoría para conocer únicamente los productos que pertenecen a la misma
<!--3. ¿Con qué campos se pueden hacer **cálculos**?-->
Se podrían hacer cálculos con el precio y el stock