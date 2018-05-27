---
title: Exception Handling
---
# Topic P - Exception Handling

## Overview

The code for real-world programs is typically divided into distinct "layers" in order to make programs more flexible and maintainable. The layer that corresponds to the drivers we have seen so far is called the "Presentation Layer". It’s called a "presentation layer" because its sole purpose is to interact with a user.

Almost all exception handling should take place in the driver, or presentation layer, of an application. Part of the reason for this is because the presentation layer is the "top" or "front-most" part of the program. When exceptions are handled at this layer, an application can report on the errors that occurred and give opportunity for the user to choose their desired response to the error.

### LOGS
