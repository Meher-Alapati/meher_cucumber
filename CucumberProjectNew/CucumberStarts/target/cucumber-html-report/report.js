$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("developer.feature");
formatter.feature({
  "id": "about-developers",
  "description": "\r\nIn order to get a high paid job\r\nAs a Developer\r\nI want to learn AdvanceJava",
  "name": "About Developers",
  "keyword": "Feature",
  "line": 1
});
formatter.scenario({
  "id": "about-developers;i-am-a-corejava-developer",
  "description": "",
  "name": "I am a CoreJava Developer",
  "keyword": "Scenario",
  "line": 8,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"CoreJava\" Developer",
  "keyword": "Given ",
  "line": 9
});
formatter.step({
  "name": "I started development",
  "keyword": "When ",
  "line": 10
});
formatter.step({
  "name": "I created a \"simple\" java program",
  "keyword": "Then ",
  "line": 11
});
formatter.step({
  "name": "I am \"not\" experienced",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "My Boss is \"still\" satisfied",
  "keyword": "But ",
  "line": 13
});
formatter.match({
  "arguments": [
    {
      "val": "CoreJava",
      "offset": 8
    }
  ],
  "location": "Developer.I_am_a_CoreJava_Developer(String)"
});
formatter.result({
  "duration": 155794622,
  "status": "passed"
});
formatter.match({
  "location": "Developer.I_started_development()"
});
formatter.result({
  "duration": 47620,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "simple",
      "offset": 13
    }
  ],
  "location": "Developer.I_created_a_simple_java_program(String)"
});
formatter.result({
  "duration": 77178,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not",
      "offset": 6
    }
  ],
  "location": "Developer.I_am_not_experienced(String)"
});
formatter.result({
  "duration": 66503,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "still",
      "offset": 12
    }
  ],
  "location": "Developer.My_Boss_is_still_satisfied(String)"
});
formatter.result({
  "duration": 69787,
  "status": "passed"
});
formatter.scenario({
  "id": "about-developers;i-am-a-advancejava-developer",
  "description": "",
  "name": "I am a AdvanceJava Developer",
  "keyword": "Scenario",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"AdvanceJava\" Developer",
  "keyword": "Given ",
  "line": 17
});
formatter.step({
  "name": "I started development",
  "keyword": "When ",
  "line": 18
});
formatter.step({
  "name": "I created a \"complex\" java program",
  "keyword": "Then ",
  "line": 19
});
formatter.step({
  "name": "I am \"very\" experienced",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "My Boss is \"highly\" satisfied",
  "keyword": "But ",
  "line": 21
});
formatter.match({
  "arguments": [
    {
      "val": "AdvanceJava",
      "offset": 8
    }
  ],
  "location": "Developer.I_am_a_CoreJava_Developer(String)"
});
formatter.result({
  "duration": 162975,
  "status": "passed"
});
formatter.match({
  "location": "Developer.I_started_development()"
});
formatter.result({
  "duration": 402306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "complex",
      "offset": 13
    }
  ],
  "location": "Developer.I_created_a_simple_java_program(String)"
});
formatter.result({
  "duration": 285309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "very",
      "offset": 6
    }
  ],
  "location": "Developer.I_am_not_experienced(String)"
});
formatter.result({
  "duration": 447463,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "highly",
      "offset": 12
    }
  ],
  "location": "Developer.My_Boss_is_still_satisfied(String)"
});
formatter.result({
  "duration": 426526,
  "status": "passed"
});
formatter.uri("tester.feature");
formatter.feature({
  "id": "about-testers",
  "description": "\r\nIn order to get a high paid job\r\nAs a Tester\r\nI want to learn Automation",
  "name": "About Testers",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "about-testers;i-am-a-manual-tester",
  "description": "",
  "name": "I am a Manual Tester",
  "keyword": "Scenario Outline",
  "line": 7,
  "type": "scenario_outline"
});
formatter.step({
  "name": "I am a \"\u003ctesterType\u003e\" Tester",
  "keyword": "Given ",
  "line": 8,
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"\u003cjobType\u003e\" paid job",
  "keyword": "Then ",
  "line": 13
});
formatter.step({
  "name": "I am \"\u003csatisfactionType\u003e\" satisfied with my salary",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "My parents are \"\u003cparentsSatisfaction\u003e\" satisfied",
  "keyword": "But ",
  "line": 15
});
formatter.examples({
  "id": "about-testers;i-am-a-manual-tester;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 17,
  "rows": [
    {
      "id": "about-testers;i-am-a-manual-tester;;1",
      "cells": [
        "testerType",
        "jobType",
        "satisfactionType",
        "parentsSatisfaction"
      ],
      "line": 18
    },
    {
      "id": "about-testers;i-am-a-manual-tester;;2",
      "cells": [
        "Manual",
        "Less",
        "Low",
        "Average"
      ],
      "line": 19
    },
    {
      "id": "about-testers;i-am-a-manual-tester;;3",
      "cells": [
        "Automation",
        "High",
        "Very",
        "Highly"
      ],
      "line": 20
    },
    {
      "id": "about-testers;i-am-a-manual-tester;;4",
      "cells": [
        "Database",
        "Good",
        "Better",
        "Better"
      ],
      "line": 21
    }
  ]
});
formatter.scenario({
  "id": "about-testers;i-am-a-manual-tester;;2",
  "description": "",
  "name": "I am a Manual Tester",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Manual\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"Less\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"Low\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My parents are \"Average\" satisfied",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Manual",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 2047245,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 101397,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Less",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 408874,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Low",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 133007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Average",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 80871,
  "status": "passed"
});
formatter.scenario({
  "id": "about-testers;i-am-a-manual-tester;;3",
  "description": "",
  "name": "I am a Manual Tester",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Automation\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"High\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"Very\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My parents are \"Highly\" satisfied",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Automation",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 512324,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 60346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 122333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Very",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 73072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Highly",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 66504,
  "status": "passed"
});
formatter.scenario({
  "id": "about-testers;i-am-a-manual-tester;;4",
  "description": "",
  "name": "I am a Manual Tester",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "I am a \"Database\" Tester",
  "keyword": "Given ",
  "line": 8,
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Location",
        "Position"
      ],
      "line": 9
    },
    {
      "cells": [
        "USA",
        "Contract"
      ],
      "line": 10
    },
    {
      "cells": [
        "India",
        "Permanent"
      ],
      "line": 11
    }
  ]
});
formatter.step({
  "name": "I apply for a job",
  "keyword": "When ",
  "line": 12
});
formatter.step({
  "name": "I got a \"Good\" paid job",
  "keyword": "Then ",
  "line": 13,
  "matchedColumns": [
    1
  ]
});
formatter.step({
  "name": "I am \"Better\" satisfied with my salary",
  "keyword": "And ",
  "line": 14,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "My parents are \"Better\" satisfied",
  "keyword": "But ",
  "line": 15,
  "matchedColumns": [
    3
  ]
});
formatter.match({
  "arguments": [
    {
      "val": "Database",
      "offset": 8
    }
  ],
  "location": "Tester.I_am_a_Manual_Tester(String,DataTable)"
});
formatter.result({
  "duration": 500829,
  "status": "passed"
});
formatter.match({
  "location": "Tester.I_apply_for_a_job()"
});
formatter.result({
  "duration": 108787,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 9
    }
  ],
  "location": "Tester.I_got_a_less_paid_job(String)"
});
formatter.result({
  "duration": 187195,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 6
    }
  ],
  "location": "Tester.I_am_not_satisfied_with_my_salary(String)"
});
formatter.result({
  "duration": 200743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Better",
      "offset": 16
    }
  ],
  "location": "Tester.My_parents_are_still_satisfied(String)"
});
formatter.result({
  "duration": 153123,
  "status": "passed"
});
});