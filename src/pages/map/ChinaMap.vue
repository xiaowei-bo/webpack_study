<template>
    <div class="select-food">
        <div id="container"></div>
    </div>
</template>

<script>
import Highcharts from "highcharts/highstock";
import Highmaps from "highcharts/modules/map";
import China from "@/files/ChinaMap.js";
Highmaps(Highcharts);

export default {
    data() {
        return {
	        option: {}
        };
    },
    methods: {
        getData() {
            this.data = [{
	            	name: '北京',
	            	value: 5000
	            },{
	            	name: '上海',
	            	value: 2000
	            },{
	            	name: '广东',
	            	value: 2200
	            },{
	            	name: '浙江',
	            	value: 1800
	            },{
	            	name: '福建',
	            	value: 1000
                }
            ];
            this.initMap();
        },
        initMap() {
      	    this.option = {
        	    chart: {
			        renderTo: 'container',
                },
                title: {
                    text: "中国地图"
                },
                mapNavigation: {
		        	enabled: true,
		        	buttonOptions: {
		        		verticalAlign: 'bottom'
		        	}
		        },
                colorAxis: {
                    min: 0,
			        minColor: '#fff',
			        maxColor: '#006cee',
			        labels:{
				        style:{
					        "color":"red","fontWeight":"bold"
				        }
			        }
                },
                series: [
                    {
                        data: this.data,
                        mapData: China,
                        joinBy: 'name',
			            name: '中国地图'
                    }
                ]
	        };
	        Highcharts.mapChart(this.option);
        }
    },
    created() {},
    mounted() {
        this.$nextTick(() => {
            this.getData();
        });
    }
};
</script>

<style lang="scss" scoped>
</style>
