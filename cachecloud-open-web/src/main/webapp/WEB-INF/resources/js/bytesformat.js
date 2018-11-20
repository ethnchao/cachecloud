// 转换bytes为KB/MB/GB/TB/PB/EB/ZB/YB，目前由于cachecloud的内存字段为long，所以最大值最多是8.19PB，更多的将会溢出
function formatBytes(a,b){if(0==a)return"0 Bytes";var c=1024,d=b||2,e=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],f=Math.floor(Math.log(a)/Math.log(c));return parseFloat((a/Math.pow(c,f)).toFixed(d))+"&nbsp;"+e[f]};
$(document).ready(function(){
    $(".format-bytes").html(function(){return formatBytes($(this).text())});
});
