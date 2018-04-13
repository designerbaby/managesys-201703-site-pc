
{{each data as it index}}
<div class="swiper-slide">
    <div class="box-wrap" id="box-wrap">
        <div class="box group_box">
            <h3>组合名称:{{it.name}}</h3>
            <h5>风格:{{it.style}}</h5>
            <h5>窗纱:{{it.chuangsha}}</h5>
            <h5>窗身:{{it.chuangshen}}</h5>
            <h5>帘头:{{it.liantou}}</h5>
            <h5>备注:{{it.remark}}</h5>
            <button type="button" class="btn btn-primary group-delete" data-id="{{it.id}}">删除组合</button>
            <button type="button" class="btn btn-primary group-change">修改组合</button>
            <table class="table is-striped">
                <thead>
                    <th>组合配件</th>
                    <th>图片</th>
                    <th>名字</th>
                    <th>类型</th>
                    <th>成本</th>
                    <th>单位</th>
                    <th>fPart</th>
                    <th>是否裁剪</th>
                    <th>ID</th>
                    <th>体积</th>
                    <th>零售价</th>
                    <th>fMaterial</th>
                </thead>
                <tbody>
                     {{each it.materials as item}}
                    <tr>
                        <td>{{item.position}}</td>
                        <td class="group-img"><img src="http://caishenye2015.gnway.cc:38080/material/pic?name={{item.url}}"></td>
                        <td>{{item.fName}}</td>
                        <td>{{item.fCategory}}</td>
                        <td>{{item.fCost}}</td>
                        <td>{{item.fUnit}}</td>
                        <td>{{item.fPart}}</td>
                        <td>{{item.fCut}}</td>
                        <td>{{item.fID}}</td>
                        <td>{{item.fVol}}</td>
                        <td>{{item.fRetail}}</td>
                        <td>{{item.fMaterial}}</td>
                    </tr>
                    {{/each}}
                </tbody>
            </table>
        </div>
    </div>
</div>
{{/each}}


