import scrapy
import pandas
import datetime
# response.xpath('//ul[contains(@class,"andes-pagination")]//li[contains(@class, "andes-pagination__button--next")]/a/@href').get()

#pages = iter(range(6))


class SearchXiaomiSpider(scrapy.Spider):
    name = 'search_xiaomi'

    start_urls = [
        'https://listado.mercadolibre.com.ar/xiaomi#D[A:xiaomi]'
    ]

    custom_settings = {
        "FEED_URI": "scraper_xiaomi.json",
        "FEED_FORMAT": "json",
        'FEED_EXPORT_ENCODING': 'UTF-8',
    }

    def parse_products(self, response, **kwargs):

        products = self.get_all_products(response)
        next_page_link = self.get_link(response)

        kwargs["products"].extend(products)
        depth = response.meta['depth']

        pages = getattr(self,'pages',None)
        if pages:
            pages = int(pages)
        else:
            pages = 5
        
        

        if depth < pages and products:
            #print(products)
            yield response.follow(next_page_link, callback=self.parse_products, cb_kwargs=kwargs)
        
        else:
            data_frame = pandas.DataFrame(kwargs["products"], columns=["productos"]).groupby('productos',sort=True)['productos'].count().reset_index(name='count').sort_values(['count'], ascending=False)
            
            data_frame['execution_date'] = datetime.datetime.now().strftime("%Y%m%d - %H:%M:%S")
            message = data_frame.groupby('execution_date')['count'].agg(['sum','count'])
            yield {
                "message": message.to_dict(orient='records'),
                "details" : data_frame.to_dict(orient='records')
            } 


    def parse(self, response):

        products = self.get_all_products(response)
        next_page_link = self.get_link(response)

        if next_page_link:
            yield response.follow(
                next_page_link,
                callback = self.parse_products,
                cb_kwargs = {
                    "products": products
                })


    def get_all_products(self,response):

        list_products =  response.xpath('//a[@class="item__info-title"]/span[@class="main-title"]/text()').getall()

        return list_products


    def get_link(self,response):

        next_link =  response.xpath('//ul[contains(@class,"andes-pagination")]//li[contains(@class, "andes-pagination__button--next")]/a/@href').get()

        return next_link