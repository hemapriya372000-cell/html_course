node --max_old_space_size=10048 ./node_modules/@angular/cli/bin/ng serve --ssl=true -c local
Ng build configuration production base href output path deploy url
How do you find structural directive is used using source code
Router outlet, pseudo element, pseudo class,spa
type vs interfaceundefined vs union valuesTypes of binding
Angular-- javascript framework, comes with cli,ide,pluggind,debugging tools

node.js- javascript runtime that allws you to run javascript outside of browser

Angular cli- needs node.js to work, needs npm that comes with node.js to install angular

set up -- install node.js

npm install -g @angular/cli

ng new app-mname

install code editor -- vs code

npm run start/ ng serve
writable signal vs readonly signal in services

@injectable is kind of lazy loading and prviding in appmodules leades to treeshaking initial code bundles

elementinjector of service -providers

providing services in main.ts/ providing them in any place using object provide and usclass/usevalue...

change detection mechanism

why change detection rus twice in development mode?

pipe cache?

settimeout--browser feature

zone.js --- avoiding zone pollutio using methods runoutsideangular to avoid unneccessary change detection

avoiding zonejs will improve perfomance

onpush strategy - another change detection strategy--opt in strategy--runs often less for iven coponent

onpush detect changes only when input changes or event happens and in child comp

signal vs onpush

changedetectionref

using rxjs behavioursubject to detect changes--markforcehck

using async pipe in html to detetect changes -- import async pipeto work with zoneless app provide in main ts provideexperimentazoneesschangedeetctionref

Rxjs--  library

observables- an object that producesstream of data

subjects are special kind of observables we have to emit data manually

observables emit values automaticlly when we subscribe them

signa are kind of observables built in angular

using effect function in angular -- executes everytime when any suignal value changes

using signal takes more code than observables

subject vs observable vs signal

we can setup any variable as observable using toobservable() function

we can setp either in variable initialization and onstructor then we we can use observer object

also we cn do vice versa using tosignal()

obsevables wont have initial vaue ike signals

httpclientmodule vs httpclient--have to provide httpclient

providers: [provideHttpClient()],-- using module elsse main.ts

tap operator--operato withoutsubscribe

put vs post

showmodal--browser featureNode js-javascript runtime runs on server or on any machine uses v8 engine to compile code to run on server

v8 - converts js coe to machine code

install node.js
node -v
clear
node command to run in cmd
material icon theme
prettier
node filename to run

repl vs files

js - weak language, oops,

new keyword

callback

http vs https http+ data encryption

event loop event listernersinstall node.js

Restful api

restful apis are stateless backends

node server.js

npm install querystring --save

set NODE_OPTIONS=--openssl-legacy-provider

import package using require keyword

run command node file name

npm install --save express

app.js file hold express code

npm install --save-dev nodemon -- to run node continuosly when detecting changes

"start:server": "nodemon server.js" add in package.json

npm install --save body-parser

npm install --save mongoose<!-- course2 -->[Optional] JavaScript Refresher: Classes, Properties & More

Angular makes heavy use of classes - a feature that's supported by vanilla JavaScript and TypeScript (though TypeScript "extends" it and adds some extra features as you'll see).

A class is essentially a blueprint for objects. Any properties and methods defined in the class will exist on all objects that are created based on the class.

For example, if you had this class (in vanilla JavaScript):

class Person {

constructor(name, age) {

this.name = name;

this.age = age;

}

greet() {

console.log('Hi, I am ' + this.name);

}

}

You could instantiate it (and create objects) like this:

const person1 = new Person('Max', 35);

const person2 = new Person('Anna', 32);

And you could then access the properties and methods defined by the class:

console.log(person1.age);

person2.greet();

When using Angular, you'll often define classes which are NEVER instantiated by you!

For example, components are created as classes - i.e., you create blueprints for custom HTML elements. But it's Angular that actually instantiates the classes in the end. You never call new SomeComponent() anywhere in your code.

In addition, Angular uses TypeScript - therefore, you often use TS-supported "enhancements" to classes.

For example decorators:

@Component({})

class SomeComponent {}

Decorators like @Component are used by Angular to add metadata & configuration to classes (and other things, as you'll see throughout the course).

In addition, TypeScript gives you more control over how properties are defined in classes.
App config
Lighthouse, bundle analyser
Ajv library for schema validation 
Unknown type 
You can, for example, mark properties (and methods) as private, public (the default) and protected to control which parts of your code can access which property (or method). You can learn more about these keywords here.

And, in general, you can learn more about TypeScript's support for classes here.

That being said, you don't have to study classes in-depth right now. You'll see most of those important features in action throughout this course.

For the moment, it's just important to understand that this classes feature exists, what it does (= create blueprints for objects) and how to work with classes.

<!-- // services -->services- to manage data at one place

dependency injection-- to create values and passes them in to componenent

different ways of injecting service

can we use service in template?

we can inject service in services also

writable signal vs readonly signal in services

@injectable is kind of lazy loading and prviding in appmodules leades to treeshaking initial code bundles

elementinjector of service -providers

providing services in main.ts/ providing them in any place using object provide and usclass/usevalue...

we can inject value also not only service

<!-- change detection mechanism -->why change detection rus twice in development mode?

pipe cache?

settimeout--browser feature

injecting ngzone

zone.js --- avoiding zone pollutio using methods runoutsideangular to avoid unneccessary change detection

avoiding zonejs will improve perfomance// zone pollution

onpush strategy - another change detection strategy--opt in strategy--runs often less for iven coponent

onpush detect changes only when input changes or event happens and in child comp

signalvs onpush

changedetectionref

behavioursubject -- takes an initial value

using rxjs behavioursubject to detect changes--markforcehck

using async pipe in html to detetect changes -- import async pipeto work with zoneless app provide in main ts provideexperimentazoneesschangedeetctionref remove zonejs in angular file

<!-- Rxjs--  library -->observables- an object that producesstream of data

subjects are special kind of observables we have to emit data manually

operators

observables emit values automaticlly when we subscribe them

signa are kind of observables built in angular

using effect function in angular -- executes everytime when any suignal value changes

using signal takes more code than observables

subject vs observable vs signal

we can setup any variable as observable using toobservable() function

we can setp either in variable initialization and onstructor then we we can use observer object

also we cn do vice versa using tosignal()

obsevables wont have initial vaue ike signals

httpclientmodule vs httpclient--have to provide httpclient

providers: [provideHttpClient()],-- using module elsse main.ts

tap operator--operato withoutsubscribe

put vs post

showmodal--browser feature

<!-- http -->provide an inject httpclient

observe in httpclient -- response,events

interceptors

Optional: Class-based Interceptors

Besides defining HTTP interceptors as functions (which is the modern, recommended way of doing it), you can also define HTTP interceptors via classes.

For example, the loggingInterceptor from the previous lecture could be defined like this (when using this class-based approach):

import {

HttpEvent,

HttpHandler,

HttpInterceptor,

HttpRequest,

} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()

class LoggingInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<unknown>, handler: HttpHandler): Observable<HttpEvent<any>> {

console.log('Request URL: ' + req.url);

return handler.handle(req);

}

}

An interceptor defined like this, must be provided in a different way than before though.

Instead of providing it like this:

providers: [

provideHttpClient(

withInterceptors([loggingInterceptor]),

)

],

You now must use withInterceptorsFromDi() and set up a custom provider, like this:

providers: [

provideHttpClient(

withInterceptorsFromDi()

),

{ provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }

]

<!-- lazy loading -->loadcomponent

loadchildren

lazy load sevices

defer views

for defer view

Defer & Hot Module Reloading

In the next lectures, I show you @defer in action.

With the latest version of the Angular CLI, you'll not see the same behavior as I show since the CLI has "Hot Module Reloading" enabled (i.e., during development, it reloads parts of the website when code changes - not the entire site).

If you want to see the same behavior, you should run ng serve --no-hmr.

Of course the behavior of @defer, and how it works, is not impacted by that. It works as explained.

preffetch lazy loaded components1. What are the key features of Angular?


2. What is the difference between AngularJS and Angular?


3. What is a component in Angular?


4. What are directives in Angular? Name a few built-in directives.


5. What is data binding? What are its types?


6. Explain dependency injection in Angular.


7. What is a module in Angular?


8. What is the role of NgModule?


9. What is interpolation?


10. What are Angular lifecycle hooks?11. Difference between constructor and ngOnInit?


11. What is the purpose of ngOnDestroy?


12. What is ViewChild and when do you use it?


13. What is ContentChild and how is it different from ViewChild?


14. What is change detection? How does it work in Angular?


15. What is OnPush change detection strategy?


16. What is a pipe? Can we chain multiple pipes?


17. What is the difference between template-driven and reactive forms?


18. What are validators in Angular? Custom vs Built-in?


19. What is lazy loading and how do you implement it?21. What is RxJS?


20. Observable vs Promise?


21. What are Subjects? BehaviorSubject vs ReplaySubject?


22. What is switchMap, mergeMap, concatMap?


23. What is debounceTime and where is it used?


24. How do you handle error in RxJS?


25. What is takeUntil and when do you use it?


26. Real-world use case of RxJS in Angular?29. What is HttpClient and how do you use it?


27. What are interceptors?


28. How do you handle API errors globally?


29. How do you cancel an HTTP request?


30. What is the use of Resolver in routing?


31. What are route guards: CanActivate, CanDeactivate, CanLoad, CanMatch?


32. How do you pass route parameters and query parameters?


33. Difference between ActivatedRoute and Router?37. What is Component-based architecture?


34. What are standalone components?


35. Difference between shared and core modules?


36. What is NgRx?


37. What is RTK Query? How is it different from Redux or NgRx?


38. How do you structure a large-scale Angular project?


39. Explain the role of service workers in Angular.


40. What is Angular Universal? What is SSR?


41. SSR vs SSG?


42. What is the purpose of the environment.ts file?47. What is TDD?


43. What are Jasmine and Karma?


44. What is the difference between unit and E2E testing?


45. Tools for E2E testing in Angular?


46. What is Playwright and how is it used?


47. What is Linting and SonarQube?


48. How do you write test cases for components and services?54. What is the CSS Box Model?


49. Explain position types in CSS (static, relative, absolute, fixed, sticky)


50. Difference between Flexbox and Grid?


51. What are media queries?


52. How do you make a site responsive?


53. What is SASS/LESS?


54. How do you use mixins, nesting, variables in SASS?61. Let vs var vs const?


55. Arrow functions vs regular functions?


56. What is a closure?


57. What is hoisting?


58. == vs ===?


59. What is a callback function?


60. What is event delegation?


61. Array methods: map, filter, reduce, sort?


62. What is the event loop?


63. Immediately Invoked Function Expression (IIFE)?


64. Object-oriented concepts: inheritance, encapsulation, polymorphism?72. What is Node.js?


65. What is Express.js?


66. What are middleware functions?


67. How does routing work in Express?


68. What is the role of package.json?


69. What is MongoDB?


70. Difference between NoSQL and SQL?


71. How do you define schema in MongoDB?80. What is Git and how do you use it?


72. Common Git commands?


73. What is version control?


74. What are branches and how do you manage them?


75. What is merge vs rebase?


76. What is AWS? What services have you used?


77. What is Azure? Do you have hands-on experience?


78. What is CI/CD?88. How do you improve Angular app performance?


79. What is tree shaking?


80. What is Ahead-of-Time (AOT) compilation?


81. How do you optimize large lists or tables?


82. What is code splitting?


83. How do you reduce bundle size?94. What is content projection and ng-content?


84. What is embedded view vs host view?


85. How do you handle accessibility in Angular?


86. What is design thinking?


87. How do you stay updated with new technology?


88. How do you handle pressure and tight deadlines?


89. Explain a challenging bug you fixed and how.   give detailed answers with explanation


Angular client
Why node.js is required for angular 
Ng vs npm
Ssr vs ssg
Index.html vs main.ts which run first explain 
Decorator
@input required ? Vs! 
Angular devtopp extension 
Selector button[]
Element selector vs attribute selector
Project ngcontent content using class vs ngprojectas
:host, when viewencapsulation is null 
Custom ngmodel,structural directive
promise.all vs forkjoincan we add interceptor only to particular routestimer = timer(0, 1000).pipe( map((val) => { if (!val) { return 100; } return ((OFFER_TIME - val) / OFFER_TIME) * 100; }), takeUntil(timer((OFFER_TIME + 1) * 1000)), finalize(() => { this.offerExpired.set(true); }) ); remainingTime = this.timer.pipe( map((val) => Math.round((val / 100) * OFFER_TIME)) );explain this codepromise.all vs forkjoincan we add interceptor only to particular routestimer = timer(0, 1000).pipe( map((val) => { if (!val) { return 100; } return ((OFFER_TIME - val) / OFFER_TIME) * 100; }), takeUntil(timer((OFFER_TIME + 1) * 1000)), finalize(() => { this.offerExpired.set(true); }) ); remainingTime = this.timer.pipe( map((val) => Math.round((val / 100) * OFFER_TIME)) );explain this codeHow do you build production code,performance tab explanaton in browser, user was using frontend and that time some changes were happened but due to cache new updates are reflecting how to overcome this,Mvc vs mvvm,If data is returning more than 100kb how will you reduce the api timings✅ How to create custom decorators
✅ How Angular reads decorator metadata internally
✅ Decorators vs annotations
✅ How decorators get converted in compiled JS
✅ Differences between Angular decorator vs NestJS decoratorRuntime.js, polyfills.js, vendor.js rolesBootstrapping vs hydration

WASI, and why is it being introduced? first-class function in Javascript           fork in node JS?stub in Node.js.                Libuv?               security implementations that are present in Node.js?             How to Enhance Node.js Performance through Clustering?           child thred          thread pool, and which library handles it in Node.js?               worker threads different from clusters?                 measure the duration of async operations?           tracing in Node.js?                 crypto module in Node.js?                 passport in Node.js?                Punycode in Node.js.first class function in Javascript?           serve static files in an Express application?                     middleware chaining in Express.js.            handle error middleware in Express.js?                  some common security practices for Express applications?              optimize the performance of a Node.js (with Express) application?                use of process management tools like PM2 in a Node.js application.                Basic Questions

What is Node.js, and how does it work?

What is the difference between Node.js and JavaScript?

What are the key features of Node.js? dxplain in very detail

What is the event loop in Node.js?

What is the difference between asynchronous and synchronous programming in Node.js?

Intermediate Questions

How does Node.js handle multiple requests simultaneously?

What are streams in Node.js, and how do they work?

What is the difference between process.nextTick() and setImmediate()?

What are callbacks, promises, and async/await in Node.js?

What is middleware in Express.js?

Advanced Questions

What are child processes in Node.js?

What is clustering in Node.js?

What is the purpose of the package.json file?

How does Node.js handle file operations?

What is the role of the buffer module in Node.js?  explain in detail with example code
Child Proccess - Types file uploading Redis web sockets Performance monitering garpage collections Rate Limiting Api versioning event loop and its phases Promises -- Type - Stages callback and callBack hell Synochronous and asynchronous File System , Streams , buffer ---> important timer function , micro task and macro task global functionis in node modules    explain these topics' in detail with exapmpleWhat is the event loop in Node.js?Great! Here's your next question:

What is the difference between CommonJS and ES Modules in Node.js?

Great! Here's your next question:

What is the difference between dependencies and devDependencies in package.json?

Great! Here's your next question:

What is the purpose of the package.json file in a Node.js project?

Got it! Here’s a new question for you:

What are WebSockets in Node.js, and how do they work?

Great! Here's your next question:

What is the difference between spawn, exec, and fork in Node.js?

Got it! I'll make sure to ask unique questions. Here's the next one:

What is clustering in Node.js, and why is it used?

What is the difference between REST API and GraphQL?What is CORS in Node.js, and how do you handle it in Express?What is middleware in Express.js, and how does it work?What is the difference between spawn, exec, and fork in Node.js?What is the difference between process.nextTick() and setImmediate() in Node.js?What are buffers in Node.js, and why are they needed?What are streams in Node.js, and how do they work?How does Node.js handle multiple requests simultaneously?What is the difference between asynchronous and synchronous programming in Node.js?What is the event loop in Node.js? path.resolve(), , explain  in detailAngular & JavaScript Interview Questions
1. Introduce yourself and explain your Angular experience briefly.
2. What is encapsulation in Angular?
3. How do you load modules and components lazily in Angular?