---
layout: about
title: Toolkits
permalink: /about/toolkits/
---
#### Other Toolkits 
Making the choice for KDE/QT does not mean KaOS loses sight of the importance of having the best tool available for the job. Most of the time it is believed KDE/Qt provides the superior tool, but there are a few applications were the GTK option is the only available of that kind (Inkscape, Ardour to name two), or in the case of web-browsers for example, the Qt options do not stack up to their GTK counterparts. For those instances, GTK applications are available, though their number will stay limited.

#### Repositories 
The repository layout is simple, and consists of three groups, Core, Main and Apps. A regular complete system update will always give you the latest available, without the need for any re-install of the system.

`Core` has the base packages needed for a system to boot-up, communicate with the BIOS, connect most hardware and set basic shell options. Example packages are the kernel, systemd, toolchain for building and basic command-line tools. This repository is carefully rolling, since any upstream update not thoroughly tested greatly affects the stability of the system.

`Main` repository consists of all the needed libraries, extra drivers and firmware needed to make the Desktop and Applications function. Many of these can be fully rolling and will move to the end-user after a seven to ten days testing period. Some more vulnerable packages will enter after enough upstream feedback is available that no regressions have occurred.

`Apps` consists of all packages seen and used by the users, including KDE (Frameworks, Plasma and Applications) and any needed tools. It is fully rolling and you can expect updates to reach this repository after a short testing period unless it needed to be built on newer versions of Core or Main packages, than it will have to wait until those are ready to come out of their testing period.

`Build` is were all packages start, whether it is a rebuild, update or new addition, all goes to build, once gone through the proper testing, than they are moved to their respective repository.
