# simple-bootstrap3-alerts

A simple alert package for Meteor using bootstrap 3.

# Meteorite Atmosphere Dependencies
* [bootstrap-3](https://atmosphere.meteor.com/package/bootstrap-3 "bootstrap-e")

# Installation

    mrt add simple-bootstrap-alerts

# Adding Alerts

```
  Alert.add(msg, type);

```

Types: success, info, warning, danger

msg can be text or an Error object.  If Error object it will display Error.reason

# Clearing Alerts

```
  Alert.clear()
```

# Handlebars 

```
 {{> alert}}
```

# Router Usage
 
```
 before: function(){
    Alert.clear();
  }
```

or : 
```
onStop: function() {
    Alerts.clear();
}
```

# License
Copyright (c) 2013 [EtherPOS](http://www.etherpos.com/ "EtherPOS, LLC"). Released under an MIT license.
