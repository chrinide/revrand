Search.setIndex({envversion:48,filenames:["basis_funcs","btypes","demo","dev/documentation","dev/index","dev/testing","generated/revrand.basis_functions.FastFood","generated/revrand.basis_functions.LinearBasis","generated/revrand.basis_functions.PolynomialBasis","generated/revrand.basis_functions.RandomRBF","generated/revrand.basis_functions.RandomRBF_ARD","generated/revrand.basis_functions.SigmoidalBasis","generated/revrand.likelihoods.Bernoulli","generated/revrand.likelihoods.Gaussian","generated/revrand.likelihoods.Poisson","generated/revrand.optimize.base","generated/revrand.optimize.base.candidate_start_points_lattice","generated/revrand.optimize.base.candidate_start_points_random","generated/revrand.optimize.base.logtrick_minimizer","generated/revrand.optimize.base.logtrick_sgd","generated/revrand.optimize.base.structured_minimizer","generated/revrand.optimize.base.structured_sgd","generated/revrand.optimize.sgd.AdaDelta","generated/revrand.optimize.sgd.AdaGrad","generated/revrand.optimize.sgd.Momentum","generated/revrand.optimize.sgd.sgd","generated/revrand.utils.base","generated/revrand.utils.base.append_or_extend","generated/revrand.utils.base.atleast_list","generated/revrand.utils.base.couple","generated/revrand.utils.base.decouple","generated/revrand.utils.base.flatten","generated/revrand.utils.base.map_indices","generated/revrand.utils.base.nwise","generated/revrand.utils.base.unflatten","generated/revrand.utils.datasets.fetch_gpml_sarcos_data","generated/revrand.utils.datasets.fetch_gpml_usps_resampled_data","generated/revrand.utils.datasets.gen_gausprocess_se","generated/revrand.utils.datasets.make_polynomial","generated/revrand.utils.datasets.make_regression","glm","index","installation","likelihoods","math","optimize","regression","utils"],objects:{"revrand.basis_functions":{Basis:[0,1,1,""],BasisCat:[0,1,1,""],FastFood:[0,1,1,""],LinearBasis:[0,1,1,""],PolynomialBasis:[0,1,1,""],RadialBasis:[0,1,1,""],RandomRBF:[0,1,1,""],RandomRBF_ARD:[0,1,1,""],SigmoidalBasis:[0,1,1,""],apply_grad:[0,4,1,""],count_args:[0,4,1,""],slice_call:[0,4,1,""],slice_init:[0,4,1,""]},"revrand.basis_functions.Basis":{"__call__":[0,2,1,""],grad:[0,2,1,""],params:[0,3,1,""]},"revrand.basis_functions.FastFood":{"__call__":[0,2,1,""],"__init__":[6,2,1,""],grad:[0,2,1,""]},"revrand.basis_functions.LinearBasis":{"__call__":[0,2,1,""],"__init__":[7,2,1,""]},"revrand.basis_functions.PolynomialBasis":{"__call__":[0,2,1,""],"__init__":[8,2,1,""]},"revrand.basis_functions.RadialBasis":{"__call__":[0,2,1,""],grad:[0,2,1,""]},"revrand.basis_functions.RandomRBF":{"__call__":[0,2,1,""],"__init__":[9,2,1,""],grad:[0,2,1,""]},"revrand.basis_functions.RandomRBF_ARD":{"__call__":[0,2,1,""],"__init__":[10,2,1,""],grad:[0,2,1,""]},"revrand.basis_functions.SigmoidalBasis":{"__call__":[0,2,1,""],"__init__":[11,2,1,""],grad:[0,2,1,""]},"revrand.btypes":{Bound:[1,1,1,""],Parameter:[1,1,1,""],Positive:[1,1,1,""],flatten_bounds:[1,4,1,""],get_values:[1,4,1,""]},"revrand.btypes.Bound":{lower:[1,3,1,""],upper:[1,3,1,""]},"revrand.btypes.Parameter":{bound:[1,3,1,""],shape:[1,3,1,""],value:[1,3,1,""]},"revrand.glm":{learn:[40,4,1,""],predict_cdf:[40,4,1,""],predict_interval:[40,4,1,""],predict_moments:[40,4,1,""]},"revrand.likelihoods":{Bernoulli:[43,1,1,""],Gaussian:[43,1,1,""],Poisson:[43,1,1,""]},"revrand.likelihoods.Bernoulli":{"__init__":[12,2,1,""],Ey:[43,2,1,""],cdf:[43,2,1,""],d2f:[43,2,1,""],d3f:[43,2,1,""],df:[43,2,1,""],dp:[43,2,1,""],dpd2f:[43,2,1,""],loglike:[43,2,1,""],params:[43,3,1,""]},"revrand.likelihoods.Gaussian":{"__init__":[13,2,1,""],Ey:[43,2,1,""],cdf:[43,2,1,""],d2f:[43,2,1,""],d3f:[43,2,1,""],df:[43,2,1,""],dp:[43,2,1,""],dpd2f:[43,2,1,""],loglike:[43,2,1,""]},"revrand.likelihoods.Poisson":{"__init__":[14,2,1,""],Ey:[43,2,1,""],cdf:[43,2,1,""],d2f:[43,2,1,""],d3f:[43,2,1,""],df:[43,2,1,""],loglike:[43,2,1,""]},"revrand.math":{linalg:[44,0,0,"-"],special:[44,0,0,"-"]},"revrand.math.linalg":{cho_log_det:[44,4,1,""],hadamard:[44,4,1,""],jitchol:[44,4,1,""]},"revrand.math.special":{logsumexp:[44,4,1,""],softmax:[44,4,1,""],softplus:[44,4,1,""]},"revrand.optimize":{base:[15,0,0,"-"]},"revrand.optimize.base":{candidate_start_points_lattice:[16,4,1,""],candidate_start_points_random:[17,4,1,""],logtrick_minimizer:[18,4,1,""],logtrick_sgd:[19,4,1,""],structured_minimizer:[20,4,1,""],structured_sgd:[21,4,1,""]},"revrand.optimize.sgd":{AdaDelta:[22,1,1,""],AdaGrad:[23,1,1,""],Momentum:[24,1,1,""],sgd:[25,4,1,""]},"revrand.optimize.sgd.AdaDelta":{"__init__":[22,2,1,""]},"revrand.optimize.sgd.AdaGrad":{"__init__":[23,2,1,""]},"revrand.optimize.sgd.Momentum":{"__init__":[24,2,1,""]},"revrand.regression":{learn:[46,4,1,""],predict:[46,4,1,""]},"revrand.utils":{base:[26,0,0,"-"]},"revrand.utils.base":{append_or_extend:[27,4,1,""],atleast_list:[28,4,1,""],couple:[29,4,1,""],decouple:[30,4,1,""],flatten:[31,4,1,""],map_indices:[32,4,1,""],nwise:[33,4,1,""],unflatten:[34,4,1,""]},"revrand.utils.datasets":{fetch_gpml_sarcos_data:[35,4,1,""],fetch_gpml_usps_resampled_data:[36,4,1,""],gen_gausprocess_se:[37,4,1,""],make_polynomial:[38,4,1,""],make_regression:[39,4,1,""]},revrand:{basis_functions:[0,0,0,"-"],btypes:[1,0,0,"-"],glm:[40,0,0,"-"],likelihoods:[43,0,0,"-"],regression:[46,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function"},terms:{"1370u":44,"1darrai":31,"30u":44,"560u":44,"__call__":0,"__init__":[6,7,8,9,10,11,12,13,14,22,23,24],"_rosen":45,"break":31,"case":[31,40,46],"class":[5,22,23,24],"default":[0,1,8,25,31,34,44],"final":[25,33],"float":[0,1,22,23,24,25,32,40,43,44,46],"import":[3,18,19,20,21,32,42,45],"int":[0,6,8,9,10,16,17,25,33,34,40,44,46],"long":[18,19],"new":[0,34],"return":[0,1,16,17,18,19,20,21,25,27,28,29,30,31,33,34,40,43,44,46],"true":[0,1,2,7,8,17,18,19,20,21,25,31,33,35,36,38,40,44,46],"var":[40,43,46],"while":40,about:3,abov:1,accept:[3,20,21],across:32,act:[0,8,33],activ:40,actual:[0,6,9,10,46],adadelta:[],adapt:2,add:0,add_subplot:45,additionali:40,adopt:3,advanc:33,afterward:44,again:[0,33,40],against:[2,44],agument:0,algebra:[],algorithm:[0,2,22,23,24,40,44],alistair:44,all:[1,17,36,40,44],allow:[1,20,21,44],along:[25,44],alpha:[40,45],also:[0,2,3,5,25,31,40,44,46],altern:5,although:3,analyt:2,andrew:3,ani:[18,19,28],annot:45,append:27,appli:[0,18,19,44],applic:[0,44],appliedx:44,apply_grad:0,apply_ind:0,appropri:[1,35,36,46],approxim:[0,2,6,9,10,40],arang:44,arbitrari:40,ard:[0,10],aren:31,arg:[18,19,25,29,32],argmin:45,argsort:44,argument:[0,25,29,30],ari:[31,34],arrai:[0,1,11,16,17,18,19,20,21,25,31,32,34,35,36,39,40,43,44,45,46],array_equ:31,array_lik:31,arrowprop:45,arrowstyl:45,artifici:46,arxiv:[2,40],associ:1,astyp:44,attribut:[6,7,8,9,10,11,12,13,14],augment:[20,21],automat:[0,3,10],ax1:45,ax2:45,axes3d:45,axi:[25,44],azim:45,back:33,base:[],basic:[0,7,44],basis_funct:[],basis_list:0,basiscat:0,batch:[25,40],batchsiz:[19,21,25,40],bayesian:[40,46],becaus:31,been:[5,14,43],befit:31,befor:[25,40],behaviour:0,benchmark:42,benefit:40,bernoulli:[],better:40,between:40,bfg:[2,18,20,40],bia:[0,8,38,39],binari:[12,43],bit:44,black:45,blei:[2,40],bool:[0,7,8,18,19,25,31,40,44,46],both:3,bound:[],bparam:[40,46],branch:3,btype:[0,1,6,9,10,11,13,18,19,20,21,40,43,46],build:3,build_sphinx:3,builtin:3,cach:42,call:[1,34,44],callabl:[0,25],can:[0,3,5,18,19,40],candid:[],candidate_start_point:17,candidates_min:45,cannot:1,carl:2,carlo:40,cart:46,cdf:43,centr:[0,11],cfg:5,chain:31,chang:40,check_finit:44,cho_log_det:44,choleski:44,choos:3,christoph:2,cmap:45,code:[2,45],coef:38,collect:5,color:45,column:[0,7,8,31,34,44],commit:3,compar:[2,40],complet:[25,40],complex:0,compon:[0,9,10,40],composit:31,comput:[40,42,44],concaten:[0,8,27,31],concatent:0,conceptu:40,concret:40,condit:25,confer:46,confid:40,configur:5,confus:31,conjug:[13,43],consist:29,constant:23,construct:[14,22,23,24],constructor:0,contain:[20,21,31],content:41,continu:[22,40],contour:45,contribut:3,convari:46,convent:3,converg:[25,40,46],correctli:5,correspond:[18,19],cost:[18,19,20,21],count:0,count_arg:0,covari:[0,6,9,10,40,46],creat:[0,5,6,8,9,10,30,33],criterion:[40,46],cstride:45,cumsum:34,cumul:[40,43],custom_reshap:34,cycl:40,d2f:43,d3f:43,darkgreen:45,data:[2,19,21,25,35,36,40,44],data_hom:[35,36],decai:[22,23,24,40],decompos:44,decomposit:44,decor:[0,1,18,19],def:[18,19,20,21],defin:[0,1,20,21,25],definit:44,degre:38,densiti:[40,43],depend:[],deploi:3,deploy:42,deriv:[40,43],descend:1,describ:[1,13,43],det:44,determin:[0,10,44],dffun:0,diagon:[40,44],dict:45,differ:[5,31,40,44],dimens:[0,6,9,10,16,31,34,40,46],dimension:[0,11,31],direct:25,directli:46,directori:[3,5],discret:40,distribut:[40,43],divid:23,doc:3,docstr:[3,5],doctest:[0,5,16,31,32,34,35,36,44],document:[],don:3,dot:[0,18,19,20,21,44],download:42,dpd2f:43,dphi:0,dtype:[18,19,34],dxd:[0,11],each:[0,2,9,10,25,29,31,43,44],edgecolor:45,edward:2,effici:32,eighteenth:46,either:31,element:[1,20,21,25,28,31,33],elev:45,ellipsi:[16,35,36],els:[27,31,32],enabl:0,end:40,enforc:[18,19],enough:31,ensur:[5,22],entir:31,enumer:[32,33],environ:5,epsilon:[22,23,40],equival:[17,29,31,32,34],essenti:[0,8],estim:2,eta:[23,24],eval_obj:[19,21,25],evalu:[1,25,40,43],even:[1,20,21,40],everyth:40,evid:46,exact:[40,46],exampl:5,exceed:44,exclud:[0,40],execut:3,exist:[3,5],exp:[14,32,43,44],expect:[40,43,46],experi:2,exponenti:[14,43],express:40,extend:27,extens:[1,3],extra:0,ey_max:40,ey_min:40,f_new:29,f_star:46,facecolor:45,fact:31,factor:44,fals:[0,7,25,31,36,38,40,44],fashion:44,fast:[0,6,44,46],fastfood:[],featur:[40,46],fetch:[35,36],few:40,fig:45,figsiz:45,figur:45,file:3,first:[20,21,25,33,40],flat:[31,34],flatten:[],flatten_bound:1,flexibl:40,follow:[0,31,44],food:[0,6],form:[3,5,31,44],former:31,fortran:[31,34],forwardli:40,found:[5,46],framework:43,from:[],full:[40,46],fun:[0,25],func:[0,39],gener:[0,13,16,17,28,37,38,43],generlis:2,gershman:[2,40],get:[0,1,43],get_valu:1,ghp:[3,42],github:3,give:[24,25,33],given:[0,2,29,34,43,44],glm:[2,12,13,40,43],googl:3,gpml_sarco:35,grad:[0,25],gradient:[],gradl:21,gradw:[19,21],greater:1,grid:16,gtol:25,guarante:1,hadamard:44,hadamard_transform:44,handwritten:[2,36],have:[0,3,5,14,25,40,43],here:[2,40],hessian:43,heterogen:31,hire:[2,45],hoffman:[2,40],how:[0,6,9,10,40],howev:[18,19],hsplit:34,hstack:[19,21,31],html:3,http:44,hurri:3,hyper:46,hyperparamet:[40,46],hyperrectangl:[16,17],ignor:[1,16,40],ignore_exception_detail:44,imaginari:[0,9,10],immut:1,implement:[0,14,18,19,31,40,43,46],includ:[0,8,40],include_bia:[0,8],incur:44,index:[34,41],indic:25,individu:3,induc:1,infer:[2,40,43],ini:5,initi:[1,13,18,19,20,21,25,40,43,46],initialis:[0,6,9,10,11],inner:[18,19],input:[20,21,25,31,40,46],instal:5,instanc:[1,14,40],instead:[40,44],integ:43,integr:5,intellig:46,interact:42,intercept:[0,8],intern:46,internet:[35,36],interpret:5,interv:40,invers:[31,34,40],ipython:42,isclos:44,isinst:1,isotrop:40,isscalar:0,item:33,iter:[2,32,33,40,46],itself:31,jac:[18,20],jet:45,jit:44,jit_max:44,jitchol:44,jitter:[22,40,44],julia:44,just:[0,7,20,21,40],kernel:[37,46],kitchen:[0,9,10],known:[0,9,10],kwarg:[0,29],lambda:[0,17,29,30,31,32,34,39],lambda_0:[18,19,20,21],lambda_:[18,19,20,21],larg:[0,2,6],larger:[0,6,44],largest:1,last:[0,1,8,34,44],latent:[12,43],latter:31,learn:[],least:28,len:[16,17,19,21,33],length:[0,1,6,9,10,11,44],lenscal:[0,37],lenscale_init:[0,6,9,10,11],let:[18,19],level:5,librari:2,like:[0,33],likelihood:[],limit:44,linalg:44,linalgerror:44,line:17,linear:[],linearbasi:[],link:40,linspac:[19,21],list:[0,1,16,17,20,21,25,27,28,31,32,33,34,43],littl:40,local:46,log:[1,18,19,32,40,43,44,46],logist:[0,2,12,43],loglik:43,lognorm:45,logp:43,logsumexp:44,lower:[1,40,44,46],lparam:40,lsex:44,machin:[0,2],mai:[1,14,40,43],main:40,maint:40,major:[31,34],make:[0,3,6,9,10,39,40],manag:5,mani:[0,3,6,9,10],map:[12,31,32,34,43],margin:46,math:[],matplotlib:[42,45],matrix:[0,44,46],matthew:2,max:25,maximum:[40,44,46],maxit:[25,40,46],mayb:31,mean:[40,46],median:40,messag:25,method:[0,2,6,7,8,9,10,11,12,13,14,18,20,22,23,24],mgrid:45,might:31,min:25,minim:[],minima:46,minimum:40,mit:2,mixtur:40,model:[],modif:[2,40],modul:[40,41,46],modulo:46,moment:40,mont:40,more:[0,16,17,31,32],most:[1,3,5,34,44],mpl_toolkit:45,mplot3d:45,mul:32,multipl:0,multipli:44,multiproc:40,multiprocess:40,must:[0,20,21,22,23,24,25,34,40],mybasis1:0,mybasis2:0,mylist:27,n_candid:17,n_featur:39,n_sampl:[38,39],n_star:46,naiv:44,napoleon:3,narrai:25,natur:44,nbase:[0,6,9,10],ndarrai:[0,1,11,16,17,25,31,34,40,43,44,46],ndim:31,neareset:[0,6],nearest:0,need:[13,18,19,43,44],new_min:[18,20],new_sgd:[19,21],newaxi:[19,21],next:33,nice:3,nicta:44,nois:[2,37,38,39,40],noiseless:2,noisi:[2,37,38],non:[2,40],none:[1,17,25,33,35,36,38,39,44,45],nonparametr:[2,40],norm:[25,45],normalis:44,normalize_whitespac:[31,32,34],note:[17,29,31,32,33,34,40,44,46],notebook:42,now:2,nsampl:40,ntest:37,ntrain:37,num:[16,45],number:[0,1,6,9,10,11,16,17,25,40,46],numer:44,numpi:[3,25,31,42,44,45],nxn:44,obj:[19,21,25,27],object:[0,1,2,6,9,10,11,13,22,23,24,25,27,28,33,40,43,46],observ:[0,6,9,10,25,40,46],obtain:40,onescol:[0,7],onli:[0,1,2,18,19,31,43],onto:[0,7],oper:[0,32,44],oppos:40,optim:[],optimis:[1,13,40,43,44,46],optimizeresult:25,option:[3,22,23,24,25],order:[0,8,31,34,40,44],org:44,origin:44,other:0,otherwis:[0,9,10,28,31],output:0,over:[33,40],overhead:44,overwrite_a:44,p_max:40,p_min:40,packag:5,page:[3,41],pair:[16,17,20,21,25,29],pairwis:33,paper:40,paralellis:40,param:[0,1,43],paramet:[],pars:[3,35,36],partial:[0,31,32,33,34,43],particular:[18,19,40],partucularli:0,pass:[2,25,40,44],pdf:[2,45],per:[16,40,44],percentil:40,perform:44,phi:[0,8],plot:[2,45],plot_surfac:45,plt:45,plu:44,png:[2,45],point:[],polynomi:[0,8,38],polynomialbasi:[],posit:[1,18,19,44],possibl:31,postcomp:40,posterior:[40,46],power:[0,6,8],precis:32,predict:[40,46],predict_cdf:40,predict_interv:40,predict_mo:40,prepend:[0,7],preprint:[2,40],present:2,preserv:[31,34],press:2,prevent:23,previou:2,prior:[12,13,43],probabl:[12,33,40,43],problem:[38,39],proceed:46,prod:[16,34],project:[3,5,45],promot:28,properties1:0,properties2:0,provid:2,push:3,pyplot:45,pytest:[5,42],python:[3,5,35,36],quantil:[40,43],queri:[40,43,46],quit:0,radial:[0,2,6],radialbasi:0,rais:[0,8,33],randn:[0,19,21],random:[],random_st:[17,38,39],randomli:17,randomrbf:[],randomrbf_ard:[],rang:[1,33],rank:0,rasmussen:2,rate:[2,22,23,24,25,40],rather:[20,21,31,46],ravel:31,rbf:[0,6,9,10,37],real:[0,1,9,10],recent:[1,34,44],recurs:44,reduc:40,regress:[],regressor:46,regularis:[40,46],reid:44,rel:40,relev:[0,10],reli:31,remain:44,render:3,reorder:44,repres:[20,21,34],request:42,requir:[40,44],res_lambda:[20,21],res_w:[20,21],reshap:34,respect:5,restructuredtext:3,result:[0,2,25,31,40,44],return_coef:38,returns_jit:44,returns_shap:31,revrand:[],rho:[22,24,40],root:5,rosen:45,roughli:[17,32],round:[35,39,44],row:[31,34,44],rst:3,rstride:45,rule:31,run:[2,3,5,40],same:[5,29,40,44],sampl:[0,2,17,40,46],scalar:[0,1,6,9,10,11,13,31,43],scale:[0,2,6,9,10,11,37],scatter:45,scikit:[2,42],scipi:[3,18,20,42,45],search:41,second:[20,21,31,43],section:5,see:[0,40,46],segment:17,self:0,semidefinit:44,sequenc:[0,1,21,25,40,44,46],set:25,set_xlabel:45,set_xlim:45,set_ylabel:45,set_ylim:45,set_zlabel:45,set_zlim:45,setup:[3,5],setuptool:5,sgd:[],sgdupdat:25,shape:[0,1,10,11,16,17,31,34,35,36,39,40,44,46],should:[22,33,40,44],show:45,sigmoid:[0,11],sigmoidalbasi:[],signatur:25,similar:[2,40,44],simpl:[18,19,46],simpli:[3,5],sin:[39,44],sinc:[1,13,31,43],sine:2,singl:[0,1,20,21,29,44],singleton:31,sink:[0,9,10],size:[17,31,33,34],skip:[0,32],slice:0,slice_cal:0,slice_init:0,slide:33,slower:40,small:[22,23],smallest:1,smola:46,smooth:[22,23,24],smx:44,soft:44,softmax:44,softplu:[14,43,44],softplut:[14,43],solut:[2,46],solv:2,some:33,someth:31,sometim:3,song:46,sourc:[2,45],sp_min:[18,20],special:[],specialis:0,specifi:[0,34,44],sphinx:[3,42],split:25,spx:44,sq_norm:[18,20],squar:2,stabl:44,stack:31,stai:1,standard:3,start:[],statist:46,statu:[40,46],still:[40,44],stochasist:2,str:25,straight:40,string:[14,43],structur:[0,20,21],structured_minim:[],style:3,subclass:0,subcommand:[3,5],subset:2,sum:[2,19,21,44],summat:44,sure:0,symmetr:44,take:[0,20,21,29,30,40],tanenbaum:3,target:[35,36,40,43,46],task:[12,13,14,43],teardown:5,tee:33,tell:25,tensor:0,term:[0,8,22,23,24,40],termin:[25,40],test:4,than:[0,1,20,21,31,32,46],thei:[0,31],them:[3,31],thi:[0,1,2,3,5,6,7,8,9,10,13,14,18,19,25,31,33,40,43,44,46],thing:3,third:[16,40,43],though:[32,40],three:2,through:[2,25,40,44],tight:46,time:[3,33,44],togeth:[5,31,40],tol:[40,46],toler:[40,46],too:0,tool:3,total:[1,34],tox:[5,42],traceback:[1,34,44],tractabl:40,train:[35,36],tranfcn:[14,43],transform:[2,12,13,14,43,44],transpose_data:[35,36],treat:31,triangular:44,trick:[1,18,19,44],trigger:25,tupl:[1,16,17,20,31,33,34],tweak:40,twice:[0,9,10],two:[0,6,30],type:[],typic:1,uncertainti:0,unchang:[34,44],under:[5,43],unflatten:[],uniform:[16,17],uniformli:17,unipath:42,uniqu:[0,9,10],unit:5,univari:[13,43],unless:[25,40],unstructur:[18,19],untounch:28,unvectorize_arg:45,updat:[22,23,24,25],upper:[1,40,44],use_sgd:40,usps_resampl:36,valid:1,valu:[1,18,19,20,21,25,29,40,43,46],valueerror:[1,33,34],var_init:[13,43],varg:0,variabl:[1,18,19,20,21,25],varianc:[13,40,43,46],variat:[2,40],variou:[0,2,5,14,43,44,46],vector:[0,10,44],vectoris:44,verbos:[40,46],veri:44,version:5,virtual:5,virtualenv:5,visual:42,w_0:[18,19,20,21],wai:44,walsh:44,want:28,wave:2,weight:[2,24,40,46],when:[0,1,25,31],where:[0,2,8,11,18,19,25,40,43],wheter:44,whether:[25,31],which:[0,1,2,3,5,6,8],wiki:44,wikipedia:44,william:2,wilson:46,window:33,within:[16,17,43],work:[0,18,19,44],would:44,wrapper:[18,19],written:3,x_star:46,xdim:[0,6,9,10],xmax:37,xmin:37,xytext:45,y_est:[19,21],y_star:46,yang:46,yet:44,yield:46,you:[0,3,5,28],zeiler:2,zero:23,zip:[17,33]},titles:["Basis Functions","Bound and Parameter Types","Demos","Documentation","Developer&#8217;s Guide","Testing","revrand.basis_functions.FastFood","revrand.basis_functions.LinearBasis","revrand.basis_functions.PolynomialBasis","revrand.basis_functions.RandomRBF","revrand.basis_functions.RandomRBF_ARD","revrand.basis_functions.SigmoidalBasis","revrand.likelihoods.Bernoulli","revrand.likelihoods.Gaussian","revrand.likelihoods.Poisson","revrand.optimize.base","revrand.optimize.base.candidate_start_points_lattice","revrand.optimize.base.candidate_start_points_random","revrand.optimize.base.logtrick_minimizer","revrand.optimize.base.logtrick_sgd","revrand.optimize.base.structured_minimizer","revrand.optimize.base.structured_sgd","revrand.optimize.sgd.AdaDelta","revrand.optimize.sgd.AdaGrad","revrand.optimize.sgd.Momentum","revrand.optimize.sgd.sgd","revrand.utils.base","revrand.utils.base.append_or_extend","revrand.utils.base.atleast_list","revrand.utils.base.couple","revrand.utils.base.decouple","revrand.utils.base.flatten","revrand.utils.base.map_indices","revrand.utils.base.nwise","revrand.utils.base.unflatten","revrand.utils.datasets.fetch_gpml_sarcos_data","revrand.utils.datasets.fetch_gpml_usps_resampled_data","revrand.utils.datasets.gen_gausprocess_se","revrand.utils.datasets.make_polynomial","revrand.utils.datasets.make_regression","Generalised Linear Models","Welcome to revrand&#8217;s documentation!","Installation","Likelihood Classes","Math Utilities","Optimization","Regression","Utilities"],titleterms:{"class":43,"function":[0,44],adadelta:22,adagrad:23,algebra:44,append_or_extend:27,arm:2,atleast_list:28,base:[15,16,17,18,19,20,21,26,27,28,29,30,31,32,33,34],basi:0,basis_funct:[6,7,8,9,10,11],bernoulli:12,bound:1,candid:45,candidate_start_points_lattic:16,candidate_start_points_random:17,classif:2,classifi:2,coupl:29,dataset:[2,35,36,37,38,39],decoupl:30,demo:2,depend:42,descent:2,develop:[4,42],digit:2,document:[3,41],draw:2,dynam:2,exampl:45,fastfood:6,fetch_gpml_sarcos_data:35,fetch_gpml_usps_resampled_data:36,fit:2,flatten:31,from:2,gaussian:[2,13],gen_gausprocess_s:37,generalis:[2,40],gradient:2,guid:4,indic:41,instal:42,learn:2,likelihood:[12,13,14,43],linear:[2,40,44],linearbasi:7,logtrick_minim:18,logtrick_sgd:19,make_polynomi:38,make_regress:39,map_indic:32,math:44,minim:42,model:[2,40],momentum:24,nwise:33,optim:[15,16,17,18,19,20,21,22,23,24,25,45],option:42,paramet:1,point:45,poisson:14,polynomialbasi:8,process:2,random:2,randomrbf:9,randomrbf_ard:10,refer:2,regress:[2,46],revrand:[6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,41],robot:2,sarco:2,sgd:[22,23,24,25],sigmoidalbasi:11,special:44,start:45,stochast:2,structured_minim:20,structured_sgd:21,tabl:41,test:5,todo:[32,33],type:1,unflatten:34,usp:2,util:[26,27,28,29,30,31,32,33,34,35,36,37,38,39,44,47],welcom:41}})