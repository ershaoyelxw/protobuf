module.exports = {
  "options": {
    "java_outer_classname": "ReliveTalkBulletProto"
  },
  "nested": {
    "ReLiveTalkBullet": {
      "fields": {
        "userName": {
          "type": "string",
          "id": 1
        },
        "type": {
          "type": "int32",
          "id": 2
        },
        "content": {
          "type": "string",
          "id": 3
        },
        "sendRelativeTime": {
          "type": "int32",
          "id": 4
        },
        "positionName": {
          "type": "string",
          "id": 5
        },
        "expand": {
          "type": "string",
          "id": 6
        },
        "positionId": {
          "type": "string",
          "id": 7
        }
      }
    },
    "ReLiveTalkBulletList": {
      "fields": {
        "reLiveTalkBullets": {
          "rule": "repeated",
          "type": "ReLiveTalkBullet",
          "id": 1
        }
      }
    }
  }
}