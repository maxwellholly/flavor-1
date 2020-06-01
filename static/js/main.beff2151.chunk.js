(this.webpackJsonpflavor=this.webpackJsonpflavor||[]).push([[0],{49:function(e,t,a){e.exports=a.p+"static/media/flavorgarlic.5f680ee1.png"},56:function(e,t,a){e.exports=a(71)},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),l=a.n(r),o=(a(61),a(15)),s=a(16),c=a(19),m=a(18),p=(a(62),a(28)),u=a(7),d=(a(63),function(e){return i.a.createElement("article",{style:h.card},i.a.createElement("div",{style:h.imageContainer},i.a.createElement("a",{href:e.val.sourceUrl,target:"_blank"},i.a.createElement("div",{className:"overlay"},i.a.createElement("h5",{className:"overlayText"},"View Recipe")),i.a.createElement("img",{src:e.val.image,alt:e.val.title,style:h.image}))),i.a.createElement("h4",{style:h.title},e.val.title),i.a.createElement("div",{style:h.recipeInfo},i.a.createElement("div",{style:h.info},i.a.createElement("h5",{style:h.label},"Health Score"),i.a.createElement("p",null,e.val.healthScore)),i.a.createElement("div",{style:h.info},i.a.createElement("h5",{style:h.label},"Servings"),i.a.createElement("p",null,e.val.servings)),i.a.createElement("div",{style:h.info},i.a.createElement("h5",{style:h.label},"Prep time"),i.a.createElement("p",null,e.val.readyInMinutes))),i.a.createElement("h6",{style:h.diet},e.diet))}),h={card:{position:"relative",width:"400px",height:"430px",marginLeft:"auto",marginRight:"auto",marginBottom:"10px",boxShadow:"3px 6px 8px -3px RGBA(52,48,62,.15)",backgroundColor:"white"},image:{width:"100%",boxSizing:"border-box"},imageContainer:{position:"relative",boxSizing:"border-box",width:"90%",height:"auto",margin:"5%"},label:{margin:"0",marginBlockStart:".5em",marginBlockEnd:".5em",opacity:".6"},recipeInfo:{display:"flex",height:"auto",width:"80%",justifyContent:"space-between",marginRight:"auto",marginLeft:"auto",marginTop:"0",marginBottom:"5%",padding:"0",marginBlockStart:".5em",marginBlockEnd:".5em"},info:{textAlign:"right",margin:"2%"},diet:{position:"absolute",textAlign:"left",margin:"5%",bottom:"0"},title:{fontSize:"1.25rem",margin:"5%",marginBottom:"2%"}},g=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).styles={pageTitle:{fontSize:"1.5rem",marginBottom:"30px",textAlign:"center"},container:{width:"90%",height:"100%",marginLeft:"auto",marginRight:"auto",position:"relative"},recipes:{width:"100%",height:"100%",display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"space-between"}},n.state={recipes:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.props.getMeals("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=21",function(e){this.setState({loaded:!0,recipes:e})}.bind(this))}},{key:"render",value:function(){var e;return!0===this.state.loaded&&(console.log(this.state.recipes.recipes),e=this.state.recipes.recipes.map((function(e,t){var a;return a=!0===e.vegetarian?"Vegetarian":!0===e.vegan?"Vegan":!0===e.glutenFree?"Gluten free":"",e.imageType?e.image="https://spoonacular.com/recipeImages/"+e.id+"-240x150."+e.imageType:e.image="https://i.imgur.com/FntDt4K.jpg",i.a.createElement(d,{key:t,val:e,diet:a})}))),i.a.createElement("div",{style:this.styles.container},i.a.createElement("h2",{style:this.styles.pageTitle},"Featured Recipes"),this.state.loaded?i.a.createElement("div",{style:this.styles.recipes},e):i.a.createElement("div",null,i.a.createElement("h3",null,"We're fetching delicious recipes for you!"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"}))))}}]),a}(n.Component),v=a(30),f=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).styles={form:{marginBottom:"50px"}},n.state={calories:"",diet:"",exclude:"",recipes:[],loaded:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("form",{style:this.styles.form,onSubmit:function(e){e.preventDefault(),this.props.handleGetMeals(this.state.calories,this.state.diet,this.state.exclude,this.props.name)}.bind(this),name:this.props.name,hidden:this.props.hidden},i.a.createElement("div",{style:b.inputC,hidden:this.props.hide},i.a.createElement("label",{htmlFor:"calories"},"Target Daily Calories "),i.a.createElement("input",{type:"number",min:"1",id:"calories",onChange:function(e){this.setState({calories:e.target.value})}.bind(this)})),i.a.createElement("div",{style:b.inputC},i.a.createElement("label",{htmlFor:"diet"},"Diet "),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"glutenFree",name:"diet",value:"gluten free",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"glutenFree"},"Gluten Free"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"vegetarian",name:"diet",value:"vegetarian",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"vegetarian"},"Vegetarian"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"ketogenic",name:"diet",value:"ketogenic",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"ketogenic"},"Ketogenic"),i.a.createElement("input",{type:"radio",id:"lacto",name:"diet",value:"lacto-vegetarian",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"lacto"},"Lacto-Vegetarian"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"ovo",name:"diet",value:"ovo-vegetarian",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"ovo"},"Ovo-Vegetarian"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"vegan",name:"diet",value:"vegan",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"vegan"},"Vegan"),i.a.createElement("input",{type:"radio",id:"pescetarian",name:"diet",value:"pescetarian",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"pescetarian"},"Pescetarian"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"paleo",name:"diet",value:"paleo",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"paleo"},"Paleo"),i.a.createElement("br",null),i.a.createElement("input",{type:"radio",id:"primal",name:"diet",value:"primal",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"primal"},"Primal"),i.a.createElement("input",{type:"radio",id:"whole",name:"diet",value:"whole30",onChange:function(e){e.target.checked&&this.setState({diet:e.target.value})}.bind(this)}),i.a.createElement("label",{htmlFor:"whole"},"Whole30"),i.a.createElement("br",null)),i.a.createElement("div",{style:b.inputC},i.a.createElement("label",{htmlFor:"exclude"},"Leave Out "),i.a.createElement("br",null),i.a.createElement("input",{type:"text",id:"exclude",placeholder:"Peanuts, Anchovies...",onChange:function(e){this.setState({exclude:e.target.value})}.bind(this)})),i.a.createElement("button",{type:"submit"},this.props.formType))}}]),a}(n.Component),b={},E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleGetMeals=function(e,t,a,i){n.setState({requested:!0,loaded:!1,showForm:!0});var r="https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame="+i;""!==e.trim()&&(r=r+"&targetCalories="+e),""!==t.trim()&&(r=r+"&diet="+t),""!==a.trim()&&(r=r+"&exclude="+a),n.props.getMeals(r,function(e){var t=this;if(e.meals){var a;console.log(e);for(var n=function(n){a="https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+e.meals[n].id+"/information",t.props.getMeals(a,(function(t){e.meals[n].healthScore=t.healthScore,e.meals[n].sourceURL=t.sourceUrl}))},i=0;i<e.meals.length;i++)n(i);setTimeout(function(){this.setState({loaded:!0,requested:!1,recipes:e.meals})}.bind(this),3e3)}else if(e.items){var r;console.log(e);for(var l=function(a){r="https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+JSON.parse(e.items[a].value).id+"/information",t.props.getMeals(r,(function(t){e.items[a].vegetarian=t.vegetarian,e.items[a].vegan=t.vegan,e.items[a].glutenFree=t.glutenFree,e.items[a].healthScore=t.healthScore,e.items[a].servings=t.servings,e.items[a].readyInMinutes=t.readyInMinutes}))},o=0;o<e.items.length;o++)l(o);setTimeout(function(){this.setState({loaded:!0,requested:!1,recipes:e.items})}.bind(this),3e3)}}.bind(Object(v.a)(n)))},n.toggleForm=function(){n.setState({showForm:!1})},n.styles={pageTitle:{fontSize:"1.75rem",marginTop:"25px",marginBottom:"30px",textAlign:"center"},container:{width:"90%",height:"100%",marginLeft:"auto",marginRight:"auto",position:"relative"},recipes:{width:"100%",height:"100%",display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"space-between"},plan:{border:"none",backgroundColor:"none",fontFamily:"kopius, serif",fontWeight:"400",fontStyle:"italic",color:"#34303e",fontSize:"2rem"},buttonC:{width:"80%",marginLeft:"auto",marginRight:"auto"}},n.state={duration:"day",recipes:[],nutrition:[],requested:!1,showForm:!1},n}return Object(s.a)(a,[{key:"render",value:function(){console.log(this.state.recipes);var e=this.state.recipes.map((function(e,t){var a;if(a=!0===e.vegetarian?"Vegetarian":!0===e.vegan?"Vegan":!0===e.glutenFree?"Gluten free":"",e.day){var n=JSON.parse(e.value);e.image="https://spoonacular.com/recipeImages/"+n.id+"-240x150."+n.imageType,e.title=n.title}else e.image="https://spoonacular.com/recipeImages/"+e.id+"-240x150."+e.imageType;return i.a.createElement(d,{key:t,val:e,diet:a})}));return i.a.createElement("div",{style:this.styles.container},i.a.createElement("div",{style:this.styles.buttonC},i.a.createElement("button",{className:"durationB active",style:this.styles.plan,onClick:function(e){if(document.getElementsByClassName("active"))for(var t=document.getElementsByClassName("active"),a=0;a<t.length;a++)t[a].classList.remove("active");e.target.classList.add("active"),this.setState({duration:"day",showForm:!1})}.bind(this)},"Day"),i.a.createElement("button",{className:"durationB",style:this.styles.plan,onClick:function(e){if(document.getElementsByClassName("active"))for(var t=document.getElementsByClassName("active"),a=0;a<t.length;a++)t[a].classList.remove("active");e.target.classList.add("active"),this.setState({duration:"week",showForm:!1})}.bind(this)},"Week")),i.a.createElement("h2",{style:this.styles.pageTitle},"Meal Planner"),i.a.createElement("button",{className:"formToggle",onClick:this.toggleForm,hidden:!this.state.showForm},"Show Form"),i.a.createElement(f,{formType:"Generate Meal Plan",handleGetMeals:this.handleGetMeals,name:this.state.duration,hidden:this.state.showForm}),this.state.loaded?i.a.createElement("div",{style:this.styles.recipes},e):this.state.requested?i.a.createElement("div",null,i.a.createElement("h3",null,"We're fetching delicious recipes for you!"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"}))):null)}}]),a}(n.Component),y=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleGetMeals=function(e,t){n.setState({requested:!0,loaded:!1,showForm:!0});var a="https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?";""!==e.trim()&&(a=a+"&diet="+e),""!==t.trim()&&(a=a+"&exclude="+t),n.props.getMeals(a,function(e){var t,a=this;console.log(e);for(var n=function(n){t="https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/"+e.results[n].id+"/information",a.props.getMeals(t,(function(t){e.results[n].vegetarian=t.vegetarian,e.results[n].vegan=t.vegan,e.results[n].glutenFree=t.glutenFree,e.results[n].healthScore=t.healthScore,e.results[n].servings=t.servings,e.results[n].readyInMinutes=t.readyInMinutes,e.results[n].image=t.image}))},i=0;i<e.results.length;i++)n(i);setTimeout(function(){this.setState({loaded:!0,requested:!1,recipes:e.results})}.bind(this),3e3)}.bind(Object(v.a)(n)))},n.toggleForm=function(){n.setState({showForm:!1})},n.styles={pageTitle:{fontSize:"1.5rem",marginTop:"100px",marginBottom:"30px",textAlign:"center"},container:{width:"90%",height:"100%",marginLeft:"auto",marginRight:"auto",position:"relative"},recipes:{width:"100%",height:"100%",display:"flex",flexFlow:"row",flexWrap:"wrap",justifyContent:"space-between"}},n.state={duration:"day",recipes:[],nutrition:[],showForm:!1,requested:!1},n}return Object(s.a)(a,[{key:"render",value:function(){console.log(this.state.recipes);var e=this.state.recipes.map((function(e,t){var a;return a=!0===e.vegetarian?"Vegetarian":!0===e.vegan?"Vegan":!0===e.glutenFree?"Gluten free":"",i.a.createElement(d,{key:t,val:e,diet:a})}));return i.a.createElement("div",{style:this.styles.container},i.a.createElement("h2",{style:this.styles.pageTitle},"Recipe Search"),i.a.createElement("h3",null,"(all inputs are optional)"),i.a.createElement(f,{formType:"Get Recipes",handleGetMeals:this.handleGetMeals,name:this.state.duration,hide:!0,hidden:this.state.showForm}),i.a.createElement("button",{className:"formToggle",onClick:this.toggleForm,hidden:!this.state.showForm},"Show Form"),this.state.loaded?i.a.createElement("div",{style:this.styles.recipes},e):this.state.requested?i.a.createElement("div",null,i.a.createElement("h3",null,"We're fetching delicious recipes for you!"),i.a.createElement("div",null,i.a.createElement("img",{src:"https://media.giphy.com/media/YoKaNSoTHog8Y3550r/giphy.gif"}))):null)}}]),a}(n.Component),x=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return i.a.createElement("section",{className:"main-content"},i.a.createElement(u.c,null,i.a.createElement(u.a,{exact:!0,path:"/Landing",render:function(t){return i.a.createElement(g,Object.assign({},t,{isAuthed:!0,features:e.props.features,getMeals:e.props.getMeals}))}}),i.a.createElement(u.a,{exact:!0,path:"/",render:function(t){return i.a.createElement(g,Object.assign({},t,{isAuthed:!0,features:e.props.features,getMeals:e.props.getMeals}))}}),i.a.createElement(u.a,{exact:!0,path:"/MealPlans",render:function(t){return i.a.createElement(E,Object.assign({},t,{isAuthed:!0,features:e.props.features,getMeals:e.props.getMeals}))}}),i.a.createElement(u.a,{exact:!0,path:"/RecipeSearch",render:function(t){return i.a.createElement(y,Object.assign({},t,{isAuthed:!0,features:e.props.features,getMeals:e.props.getMeals}))}})))}}]),a}(n.Component),w=a(51),j=a(5),O=a(109),k=a(108),S=a(112),F=a(113),C=a(111),M=a(106),T=a(114),N=a(115),B=a(110),R=a(50),L=a.n(R),G=a(105),P=a(17),I=a(49),A=a.n(I),W=function(e){var t=D();Object(P.a)();return i.a.createElement("div",{className:t.container},i.a.createElement("img",{className:t.flavor,src:A.a,alt:"logo"}))},D=Object(G.a)((function(e){var t,a;return{container:(t={},Object(j.a)(t,e.breakpoints.up("sm"),{position:"fixed",height:"135px",width:"100%",marginRight:"auto",marginLeft:"auto",marginTop:"0",zIndex:"2000"}),Object(j.a)(t,"position","absolute"),Object(j.a)(t,"height","135px"),Object(j.a)(t,"width","80%"),Object(j.a)(t,"right","0"),Object(j.a)(t,"marginTop","60px"),Object(j.a)(t,"zIndex","2000"),t),flavor:(a={},Object(j.a)(a,e.breakpoints.up("sm"),{position:"relative",width:"525px",margin:"0",padding:"0",marginTop:"10px"}),Object(j.a)(a,"width","300px"),Object(j.a)(a,"position","fixed"),Object(j.a)(a,"right","0"),a)}})),V=Object(G.a)((function(e){var t,a,n;return{root:{display:"flex"},drawer:(t={},Object(j.a)(t,e.breakpoints.up("sm"),{width:"100%",top:"135px",flexShrink:0}),Object(j.a)(t,"width","100%"),Object(j.a)(t,"top","135px"),Object(j.a)(t,"flexShrink",0),t),appBar:(a={},Object(j.a)(a,e.breakpoints.up("sm"),{width:"100%",height:"135px"}),Object(j.a)(a,"height","135px"),Object(j.a)(a,"backgroundColor","#F7D2D2"),a),menuButton:Object(j.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:(n={},Object(j.a)(n,e.breakpoints.up("sm"),{backgroundColor:"rgba(0,0,0,0)",display:"none"}),Object(j.a)(n,"display","block"),Object(j.a)(n,"width","100%"),Object(j.a)(n,"height","300px"),Object(j.a)(n,"paddingTop","5%"),Object(j.a)(n,"marginTop","135px"),Object(j.a)(n,"backgroundColor","white"),n),content:{flexGrow:1,padding:e.spacing(3)},navLink:{textDecoration:"none",color:"#34303e"},nav:{width:"100%"},search:{width:"60%"},h6:Object(j.a)({visibility:"hidden",width:"0"},e.breakpoints.up("sm"),{visibility:"visible",width:"25%"}),navigators:Object(j.a)({},e.breakpoints.up("sm"),{marginTop:"200px",padding:"0",width:"200%",border:"none",backgroundColor:"none",fontFamily:"kopius, serif",fontWeight:"400",fontStyle:"italic",color:"#34303e",fontSize:"2rem",textDecoration:"none"}),navigatorsC:Object(j.a)({},e.breakpoints.up("sm"),{width:"100%",marginTop:"200px"})}})),z=function(e){var t=e.container,a=V(),n=Object(P.a)(),r=i.a.useState(!1),l=Object(w.a)(r,2),o=l[0],s=l[1],c=function(){s(!o)},m=i.a.createElement("div",null,i.a.createElement("div",{className:a.toolbar}),i.a.createElement(M.a,null,["Meal Plans","Recipe Search"].map((function(e,t){return i.a.createElement(p.b,{to:"/"+e.split(" ").join(""),className:a.navLink,key:t},i.a.createElement(T.a,{button:!0,key:t,className:a.listItem},i.a.createElement(N.a,{primary:e})))}))));return i.a.createElement("section",{className:a.nav},i.a.createElement("div",{className:a.root},i.a.createElement(k.a,null),i.a.createElement(O.a,{position:"fixed",className:a.appBar},i.a.createElement(B.a,null,i.a.createElement(C.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:c,className:a.menuButton},i.a.createElement(L.a,null)))),i.a.createElement(p.b,{to:"/"},i.a.createElement(W,null)),i.a.createElement("nav",{className:a.drawer},i.a.createElement(F.a,{smUp:!0,implementation:"css"},i.a.createElement(S.a,{container:t,variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:o,onClose:c,classes:{paper:a.drawerPaper},ModalProps:{keepMounted:!0}},m)),i.a.createElement(F.a,{xsDown:!0,implementation:"css"},i.a.createElement(S.a,{classes:{paper:a.drawerPaper},variant:"permanent",open:!0},m)))))},q=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).styles={navigators:{},navigatorsC:{marginTop:"200px"}},n}return Object(s.a)(a,[{key:"getMeals",value:function(e,t){fetch(e,{method:"GET",headers:{"x-rapidapi-host":"spoonacular-recipe-food-nutrition-v1.p.rapidapi.com","x-rapidapi-key":"a7abd7a9cemshabd18f81b1c14e0p15c8dcjsndf63f02d30eb"}}).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){t(e)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(p.a,{className:"main-content"},i.a.createElement(z,null),i.a.createElement("div",{className:"desNav"},i.a.createElement(p.b,{to:"/MealPlans"},i.a.createElement("button",{className:"mainNavB"},"Meal Plans")),i.a.createElement(p.b,{to:"/RecipeSearch"},i.a.createElement("button",{className:"mainNavB"},"Recipe Search"))),i.a.createElement(x,{getMeals:this.getMeals})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.beff2151.chunk.js.map