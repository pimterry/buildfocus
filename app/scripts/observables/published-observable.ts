'use strict';

function publishedObservable<T>(valueName: string, realObservable: KnockoutObservable<T>, storageArea = "local") {
  // I think is not outright required, but it is a bit cleaner to do so, and helps
  // ensure everything stays in sync (and everybody reliably gets an initial update)
  realObservable.extend({notify: 'always'});

  realObservable.subscribeAndUpdate(function (newValue) {
    var changes = {};
    changes[valueName] = newValue;
    chrome.storage[storageArea].set(changes);
  });

  return realObservable;
}

export = publishedObservable;