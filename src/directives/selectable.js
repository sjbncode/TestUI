import _ from 'underscore';
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

function bindClick(el,bindData,row,columnKey,ctx){
	el.onclick=function(event){
        if(event.type=='click'){
            var index=_.indexOf(bindData,row);
            var selectKey='selectable_'+columnKey; 
           
            if(event.altKey==false&&event.ctrlKey==false&&event.shiftKey==false){
                
                var newValue=!row[selectKey];
                if(newValue){
                    ctx.selctableFalgs[selectKey]=index;
                }else{
                    ctx.selctableFalgs[selectKey]=-1;
                }
                _.each(bindData,(x)=>{ ctx.$set(x,selectKey,false)});                
                ctx.$set(row,selectKey,newValue);
            }else if (event.altKey==false&&event.ctrlKey==true&&event.shiftKey==false) {
                var newValue=!row[selectKey];
                ctx.$set(row,selectKey,newValue);
                var sourceIndex=ctx.selctableFalgs[selectKey];
                if(newValue
                    &&sourceIndex!=undefined&&sourceIndex>-1){
                    console.log(index+'|'+sourceIndex)
                    bindData[index][columnKey]=bindData[sourceIndex][columnKey]
                }

            }
            //todo use shiftkey
            else if((event.altKey==true&&event.shiftKey==false)&&event.ctrlKey==false)
            {
                if(ctx.selctableFalgs[selectKey]!=undefined&&ctx.selctableFalgs[selectKey]>-1){
                    var sourceIndex=ctx.selctableFalgs[selectKey];
                    var source=Math.min(sourceIndex,index);
                    var target=Math.max(sourceIndex,index);                    
                    for (var i = source; i <= target; i++) {                          
                        bindData[i][columnKey]=bindData[sourceIndex][columnKey] ;  
                        ctx.$set(bindData[i],selectKey,true);
                    }
                }
            }
        }
	}
}
function CheckStatus(el, binding, vnode){
		var v = binding.value;
		var selectableKey='selectable_'+v.property
		var data=v.data;
		if(data[selectableKey]==true){
			addClass(el,'selectable-active')
		}else{
			removeClass(el,'selectable-active')
		};

}
export default {
	bind:function(el, binding, vnode) {
		var ctx=vnode.context;
		var targetElement=el;
		var v = binding.value;
		
		if(!ctx.selctableFalgs){
			ctx.selctableFalgs={};
		}
		bindClick(targetElement,v.dataList,v.data,v.property,ctx)
		addClass(targetElement,'selectable')

		CheckStatus(targetElement,binding,vnode);
	},
	update:function(el, binding, vnode){	
		CheckStatus(el,binding,vnode);
	}
}