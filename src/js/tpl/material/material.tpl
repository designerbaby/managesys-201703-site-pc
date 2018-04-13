{{each data as item}}
<tr>
    <td><img src="http://caishenye2015.gnway.cc:38080/material/pic?name={{item.url}}" style="width: 50px; height: 50px;"></td>
    <!--<td><img src="http://hello.s1.natapp.cc/material/pic?name={{item.url}}" style="width: 50px; height: 50px;"></td>-->
    <!--<td><img src="172.26.40.6:8080/material/pic?name={{item.url}}" style="width: 50px; height: 50px;"></td>-->
    <td>{{item.style}}</td>
    <td>{{item.fName}}</td>
    <td>{{item.fCategory}}</td>
    <td>{{item.fCost}}</td>
    <td>{{item.fUnit}}</td>
    <td>{{item.fPart}}</td>
    <td>{{item.fRetail}}</td>
    <td>{{item.fVol}}</td>
    <td>{{item.fCut}}</td>
    <td><button type="button" class="btn btn-primary js-material-edit" data-id="{{item.id}}">编&nbsp;辑</button></td>
</tr>
{{/each}}

