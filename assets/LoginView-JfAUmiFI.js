import{a as c}from"./axios-L6U4YIEh.js";import{_ as u,c as m,a as s,g as p,h as l,v as d,F as _,o as f}from"./index-d3tXiY8s.js";var h={VITE_URL:"https://vue3-course-api.hexschool.io/v2",VITE_PATH:"hedy-api-path",BASE_URL:"/week06-v2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_URL:w}=h,v={data(){return{user:{username:"",password:""}}},methods:{login(){const r=`${w}/admin/signin`;c.post(r,this.user).then(e=>{const{token:n,expired:a}=e.data;document.cookie=`myToken=${n}; expires=${new Date(a)}; path=/`,this.$router.push("/admin/products")}).catch(()=>{alert("登入失敗")})}}},g=s("h2",null,"登入頁面",-1),b={class:"container"},x={class:"row justify-content-center"},E=s("h1",{class:"h3 mb-3 font-weight-normal"}," 請先登入 ",-1),V={class:"col-8"},y={class:"form-floating mb-3"},k=s("label",{for:"username"},"Email address",-1),T={class:"form-floating"},U=s("label",{for:"password"},"Password",-1),D=s("button",{class:"btn btn-lg btn-primary w-100 mt-3",type:"submit"}," 登入 ",-1);function R(r,e,n,a,t,i){return f(),m(_,null,[g,s("div",b,[s("div",x,[E,s("div",V,[s("form",{id:"form",class:"form-signin",onSubmit:e[2]||(e[2]=p((...o)=>i.login&&i.login(...o),["prevent"]))},[s("div",y,[l(s("input",{type:"email",class:"form-control",id:"username",placeholder:"name@example.com","onUpdate:modelValue":e[0]||(e[0]=o=>t.user.username=o),required:"",autofocus:""},null,512),[[d,t.user.username]]),k]),s("div",T,[l(s("input",{type:"password",class:"form-control",id:"password",placeholder:"Password","onUpdate:modelValue":e[1]||(e[1]=o=>t.user.password=o),required:""},null,512),[[d,t.user.password]]),U]),D],32)])])])],64)}const P=u(v,[["render",R]]);export{P as default};
