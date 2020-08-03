# Web Scraping  
#### Objetivo 
Obtener los resultados de busqueda de la url `https://listado.mercadolibre.com.ar/xiaomi#D[A:xiaomi]` en las **5** primeras páginas de la búsqueda.

## Descripción del proyecto
La extraccion de informacion se realiza con el Framework **Scrapy**, donde se usaron los siguientes expresiones xpath :

 - Lista de productos:

    '//a[@class="item__info-title"]/span[@class="main-title"]/text()'

- Siguiente Pagina

    '//ul[contains(@class,"andes-pagination")]//li[contains(@class, "andes-pagination__button--next")]/a/@href'

Este proyecto se aloja sobre scrapyhub para su depligue y automatizacion de jobs, se configura para que se actualice cada 2hrs. La visualizacion de su resultado se realiza sobre un projecto de JavaScript, este proyecto es alojado sobre GitHub pages.



## Codigo
#### backend
> sobre la ruta rama **master**:
/sacraper
---- /scraper
......---- /scraper
...........---- /spiders
................----/**search_xiaomi.py**

#### frontend
> produccion sobre la ruta rama **gh_pages**:
/dist
.index.html
.main.js
.styles.css