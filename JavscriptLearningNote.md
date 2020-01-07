## Prototype inheritance
```
function doSomething(){this.a = 1}
doSomething.prototype.foo = "bar";
console.log( doSomething.prototype ); // add foo: bar to prototype
var doSomeInstancing = new doSomething(); // Here doSomething becomes constructor because it’s called with new
console.log( doSomeInstancing ); // has foo: bar

var a = {a: 1};
var b = Object.create(a);
delete b.a;
console.log(a.a); // print 1 because it shows value from its prototype chain
var c = new doSomething()
delete c.a;
console.log(c.a); // print undefined because it has a shorter chain
```

Performance:
Check  hasOwnProperty() to avoid enumerating the whole prototype chain

Don’t extend native prototype unless polyfill

For object use Object.getPrototypeOf() and Object.setPrototypeOf()

built in type’s prototype will be applied when creating object with syntax constructs
Array.prototype. Function.prototype. String.prototype

## Closure
A closure is a special kind of object that combines two things: a function, and the environment in which that function was created. The environment consists of any local variables that were in-scope at the time that the closure was created.

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure 'remembers' the environment in which it was created in.

Since x is a member of the environment that created nestedFunction(), nestedFunction() will have access to it

## This in Arrow Function
Before arrow functions, every new function defined its own this value based on how the function was called:

- new object in the case of a constructor.
- undefined in strict mode function calls.
- The base object if the function was called as an "object method".

So for inner function or setTimeout, we had to assign this to another variable and pass it, or bind it to the function by calling `.bind(this)`

An arrow function does not have its own this. The this value of the enclosing lexical scope is used; arrow functions follow the normal variable lookup rules. So while searching for this which is not present in current scope, an arrow function ends up finding the this from its enclosing scope.

Since arrow functions do not have their own this, the methods call() and apply() can only pass in parameters. Any this argument is ignored.

## IIFE

An immediately-invoked function expression is a pattern which produces a lexical scope using JavaScript's function scoping. Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function.

## Design Patterns

### Module Pattern

Modules are an *integral* piece of any robust application's architecture and are typically single-purpose parts of a larger system that are interchangeable.

The module pattern is a popular design that pattern that encapsulates 'privacy', state and organization using closures.

Modules contain specific pieces of functionality for your application. They publish notifications informing the application whenever something interesting happens - this is their primary concern. As I'll cover in the FAQs, modules can depend on DOM utility methods, but ideally shouldn't depend on any other modules in the system. They should not be concerned with:

- what objects or modules are subscribing to the messages they publish
- where these objects are based (whether this is on the client or server)
- how many objects subscribe to notifications

```
var basketModule = (function() {
    var basket = []; //private
    return { //exposed to public
        addItem: function(values) {
            basket.push(values);
        },
        getItemCount: function() {
            return basket.length;
        },
        getTotal: function(){
           var q = this.getItemCount(),p=0;
            while(q--){
                p+= basket[q].price;
            }
            return p;
        }
    }
}());
```

### Facade Pattern

Facades are a structural pattern which can often be seen in JavaScript libraries and frameworks where, although an implementation may support methods with a wide range of behaviors, only a 'facade' or limited abstract of these methods is presented to the client for use.

A facade serves as an abstraction of the application core which sits between the mediator and our modules - it should ideally be the only other part of the system modules are aware of.

The Facade abstracts the core to avoid modules touching it directly. It subscribes to interesting events (from modules) and says 'Great! What happened? Give me the details!'. It also handles module security by checking to ensure the module broadcasting an event has the necessary permissions to pass such events that can be accepted.

```
var module = (function() {
    var _private = {
        i:5,
        get : function() {
            console.log('current value:' + this.i);
        },
        set : function( val ) {
            this.i = val;
        },
        run : function() {
            console.log('running');
        },
        jump: function(){
            console.log('jumping');
        }
    };
    return {
        facade : function( args ) {
            _private.set(args.val);
            _private.get();
            if ( args.run ) {
                _private.run();
            }
        }
    }
}());


module.facade({run: true, val:10});
//outputs current value: 10, running
```

### Mediator Pattern

In real-world terms, a mediator encapsulates how disparate modules interact with each other by acting as an intermediary. The pattern also promotes loose coupling by preventing objects from referring to each other explicitly - in our system, this helps to solve our module inter-dependency issues.

The Mediator (Application Core) acts as a 'Pub/Sub' manager using the mediator pattern. It's responsible for module management and starts/stops modules as needed. This is of particular use for dynamic dependency loading and ensuring modules which fail can be centrally restarted as needed.
```
var mediator = (function(){
    var subscribe = function(channel, fn){
        if (!mediator.channels[channel]) mediator.channels[channel] = [];
        mediator.channels[channel].push({ context: this, callback: fn });
        return this;
    },

    publish = function(channel){
        if (!mediator.channels[channel]) return false;
        var args = Array.prototype.slice.call(arguments, 1);
        for (var i = 0, l = mediator.channels[channel].length; i < l; i++) {
            var subscription = mediator.channels[channel][i];
            subscription.callback.apply(subscription.context, args);
        }
        return this;
    };

    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj){
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };

}());
```
