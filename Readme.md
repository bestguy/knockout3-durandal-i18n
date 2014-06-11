# Angular-style features using Knockout 3 and Durandal

Example showing some nice features Angular has in a Knockout 3 app using Durandal and Knockout.Punches

## Demos:

### {{ handlebars }}
Handlebars text insertion instead of the usual `data-bind="text: ..."`

```<h1>This is {{ someObservable }}.  I like it.</h1>```

### {{ handlebars | __textFilters__ }}
Text filters inside of handlebars:

```<h1>This is another {{ observable | uppercase }} with an uppercase  filter.</h1>```

I18N text filter inside of handlebars:

```<h2>This is a localized string {{ 'home.label' | i18n }}.</h2>```


### Transparent observables:
Eliminates need for `ko.observables` and `()`everywhere, use this:


    var someDynamicProp = 1;
    var x = someDynamicProp;

instead of:

    var someDynamicProp = ko.observable();
    someDynamicProp(1); // sets
    var x = someDynamicProp(); // gets

## Libraries

- **Knockout 3** - [http://knockoutjs.com](http://knockoutjs.com)
	- Used for data-binding between JavaScript models and the DOM
- **Knockout.Punches** - [http://mbest.github.io/knockout.punches/](http://mbest.github.io/knockout.punches/)
	- Uses new KO3 APIs to add Angular-style functionality.
- **Durandal** - [http://durandaljs.com](http://durandaljs.com)
	- SPA Application library built on Knockout and requirejs that adds advanced modules and view transition functionality.
- **Durandal observable plugin** - [http://durandaljs.com/documentation/Binding-Plain-Javascript-Objects/](http://durandaljs.com/documentation/Binding-Plain-Javascript-Objects/)
	- Durandal plugin eliminates need for `ko.observables` everywhere.
- **i18next** - [http://i18next.com/](http://i18next.com/)
	- Internationalization library
- **requirejs** - [http://requirejs.org/](http://requirejs.org/)
	- requirejs loader for JavaScript modules.
