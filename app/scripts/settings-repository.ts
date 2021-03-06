'use strict';

import ko = require('knockout');
import _ = require('lodash');
import synchronizedObservable = require('data-synchronization/synchronized-observable');
import Domain = require('url-monitoring/domain');
import BadTabsWarningAction = require('bad-tabs-warning/bad-tabs-warning-action');
import AutopauseMode = require("idle-monitoring/autopause-mode");

class SettingsRepository {
  private badDomainPatterns = synchronizedObservable("badDomainPatterns", [], "sync");

  public badDomains = ko.pureComputed({
    read: () => {
      return _(this.badDomainPatterns()).map(function (pattern) {
        return new Domain(pattern);
      }).sortBy(function (domain) {
        return domain.toString();
      }).valueOf();
    },
    write: (newDomains) => {
      var patterns = _.map(newDomains, 'pattern');
      this.badDomainPatterns(patterns);
    }
  });

  public badTabsWarningAction = synchronizedObservable("badTabsWarningAction", BadTabsWarningAction.Prompt, "sync");

  public autopauseMode = synchronizedObservable("autopauseMode", AutopauseMode.PauseOnLock, "sync");
}

export = SettingsRepository;
