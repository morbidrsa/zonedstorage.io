"use strict";(self.webpackChunkzonedstorage_io=self.webpackChunkzonedstorage_io||[]).push([[872],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,k=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?i.createElement(k,o(o({ref:t},p),{},{components:n})):i.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6756:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"prerequisites",title:"System Prerequisites",sidebar_label:"System Prerequisites"},l={unversionedId:"getting-started/prerequisites",id:"getting-started/prerequisites",isDocsHomePage:!1,title:"System Prerequisites",description:"The zoned block device (ZBD) interface that supports ZBC and ZAC disks was",source:"@site/docs/getting-started/prerequisite.md",sourceDirName:"getting-started",slug:"/getting-started/prerequisites",permalink:"/docs/getting-started/prerequisites",version:"current",sidebar_label:"System Prerequisites",frontMatter:{id:"prerequisites",title:"System Prerequisites",sidebar_label:"System Prerequisites"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Zoned Block Device Emulation with *null_blk*",permalink:"/docs/getting-started/nullblk"}},d=[{value:"Linux Kernel",id:"linux-kernel",children:[]},{value:"Kernel Version and ZBD Support",id:"kernel-version-and-zbd-support",children:[{value:"Kernel Version",id:"kernel-version",children:[]},{value:"Zoned Block Device Support",id:"zoned-block-device-support",children:[]},{value:"Write Ordering Control",id:"write-ordering-control",children:[]}]},{value:"User Utilities",id:"user-utilities",children:[{value:"lsblk",id:"lsblk",children:[]},{value:"blkzone",id:"blkzone",children:[]},{value:"lsscsi",id:"lsscsi",children:[]},{value:"sg3_utils",id:"sg3_utils",children:[]},{value:"libzbc",id:"libzbc",children:[]}]}],p={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The zoned block device (ZBD) interface that supports ZBC and ZAC disks was\nadded to Linux","\xae"," in kernel version 4.10. All Linux kernel versions since\n4.10 include the ZBD interface."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Linux kernels prior to version 4.10 do not implement the ZBD interface.  If you\nuse a kernel older than kernel 4.10, you can access and manage ZBC and ZAC\ndisks, but only in a limited way. This is discussed in more detail in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/linux/overview"},"Linux\nSupport")," document."))),(0,r.kt)("p",null,"To verify that the zoned device has been discovered and correctly initalized,\nseveral user utilities must be installed on the test system. These utilities\nare discussed in more detail in the section called ",(0,r.kt)("a",{parentName:"p",href:"./prerequisites#user-utilities"},"User\nUtilities"),"."),(0,r.kt)("h2",{id:"linux-kernel"},"Linux Kernel"),(0,r.kt)("p",null,"We recommend only systems with Linux kernels that are version 4.10 or\nhigher for use with ZBC and ZAC hard disks. If you intend to follow\nthe examples in this Quick Start Guide, we recommend that you use a\nLinux distribution that includes ZBD support. More information on\nrecommended Linux distributions can be found\n",(0,r.kt)("a",{parentName:"p",href:"/docs/distributions/linux"},"here"),"."),(0,r.kt)("p",null,"ZNS SSDs require zone capacity support, which was introduced in\nLinux kernel version 5.9. More information on ZNS SSDs can be found\n",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/zns"},"here"),"."),(0,r.kt)("p",null,"Advanced users might want to compile and install a specific Linux\nkernel version instead of using the default kernel. If this is the\ncase, you must enable ZBD support in that kernel.  An explanation of\nhow to enable ZBD support in the kernel configuration is provided\n",(0,r.kt)("a",{parentName:"p",href:"/docs/linux/config"},"here"),".  We recommend that you always use the\nhighest available stable kernel version or a long term stable kernel\nversion higher than 4.10.  Information on available kernel versions\ncan be found ",(0,r.kt)("a",{href:"https://www.kernel.org/",target:"_blank"},"here"),"."),(0,r.kt)("h2",{id:"kernel-version-and-zbd-support"},"Kernel Version and ZBD Support"),(0,r.kt)("p",null,"Two conditions must be met to ensure that a system's Linux kernel supports the\nZBD interface."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The kernel version must be 4.10.0 or higher,")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The kernel compilation configuration option ",(0,r.kt)("em",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," must be\nenabled."))),(0,r.kt)("h3",{id:"kernel-version"},"Kernel Version"),(0,r.kt)("p",null,"The command ",(0,r.kt)("inlineCode",{parentName:"p"},"uname")," makes it possible to check the version of the\nkernel running on a system. For example, on a ",(0,r.kt)("em",{parentName:"p"},"Fedora 29"),"\ndistribution, this command and its output is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# uname -r\n5.0.13-200.fc29.x86_64\n")),(0,r.kt)("h3",{id:"zoned-block-device-support"},"Zoned Block Device Support"),(0,r.kt)("p",null,"Zoned block device support might not be enabled by default in the\nrunning kernel. The kernel configuration option that is used to enable\nzoned block device support is ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED"),"."),(0,r.kt)("p",null,"There are several methods that can be used to determine whether the\n",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED")," option has been enabled in the kernel.  Not all\nof these methods work for every Linux distribution.  In some\ndistributions, the configuration file for the running kernel can be\nfound in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/boot")," directory or in the directory containing the\nkernel modules."),(0,r.kt)("p",null,"The following commands test whether your installed kernel supports\nzoned block devices."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /boot/config-`uname -r` | grep CONFIG_BLK_DEV_ZONED\nCONFIG_BLK_DEV_ZONED=y\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /lib/modules/`uname -r`/config | grep CONFIG_BLK_DEV_ZONED\nCONFIG_BLK_DEV_ZONED=y\n")),(0,r.kt)("p",null,"If the output of one of these commands is ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED=y"),",\nthen zoned block devices are supported by the kernel. If the output is\n",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED=n"),", then block device support is disabled and\nthe kernel must be recompiled in order to enable block device support."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"For kernels older than kernel version 4.10, the output of these commands is\nalways empty."))),(0,r.kt)("p",null,"If your kernel exports its configuration through the ",(0,r.kt)("em",{parentName:"p"},"proc")," file\nsystem, use one of the following sets of commands to retreive the\nstatus of ",(0,r.kt)("inlineCode",{parentName:"p"},"CONFIG_BLK_DEV_ZONED"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# modprobe configs\n# cat /proc/config.gz | gunzip | grep CONFIG_BLK_DEV_ZONED\nCONFIG_BLK_DEV_ZONED=y\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# modprobe configs\n# zcat /proc/config.gz | grep CONFIG_BLK_DEV_ZONED\nCONFIG_BLK_DEV_ZONED=y\n")),(0,r.kt)("h3",{id:"write-ordering-control"},"Write Ordering Control"),(0,r.kt)("p",null,"By default, the Linux kernel does not guarantee the order in which\ncommands are delivered to a block device. This means that an\napplication that writes sequentially to a disk might have its write\ncommands delivered to the disk in a different order than the order\nsent by the application. This might cause write errors if the",(0,r.kt)("br",{parentName:"p"}),"\n","application is writing to a zoned device over sequential zones."),(0,r.kt)("p",null,'To avoid this problem, a "zone write lock mechanism" that serializes\nwrites to sequential zones is implemented by all kernels that support\nzoned block devices. For kernel versions between 4.10 and 4.15\n(inclusive) no special configuration is necessary and the kernel\nguarantees the delivery of write commands to the device in the same\norder as the order of write requests issued by the application.'),(0,r.kt)("p",null,"However, in kernel version 4.16, the implementation of zone write\nlocking was moved to the ",(0,r.kt)("em",{parentName:"p"},"deadline")," and ",(0,r.kt)("em",{parentName:"p"},"mq-deadline"),"\nblock I/O scheduler. Therefore, in kernels of version 4.16 and\nhigher, you must use this scheduler with zoned block devices in order\nto make the kernel guarantee the order of write commands."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("em",{parentName:"p"},"mq-deadline")," block I/O scheduler is enabled only if the SCSI multi-queue\n(",(0,r.kt)("em",{parentName:"p"},"scsi-mq"),") infrastructure is enabled. This feature use can be controlled by\nusing the kernel boot argument ",(0,r.kt)("em",{parentName:"p"},"scsi_mod.use_blk_mq"),". The default has been\n",(0,r.kt)("em",{parentName:"p"},"scsi-mq")," since kernel version 5.0 and the legacy single-queue SCSI command path\nis no longer supported."))),(0,r.kt)("p",null,"To see which block I/O scheduler a zoned disk uses, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# cat /sys/block/sdb/queue/scheduler\n[none] mq-deadline kyber bfq\n")),(0,r.kt)("p",null,"If the disk block I/O scheduler that has been selected is not\n",(0,r.kt)("em",{parentName:"p"},"mq-deadline")," as in the example above, use the following command to\nchange the scheduler:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-plaintext"},"# echo deadline > /sys/block/sdb/queue/scheduler\n\n# cat sys/block/sdb/queue/scheduler\n[mq-deadline] kyber bfq none\n")),(0,r.kt)("h2",{id:"user-utilities"},"User Utilities"),(0,r.kt)("p",null,"Various user level tools should also be installed in order to verify the\ncorrect operation of zoned block devices and to troubleshoot problems."),(0,r.kt)("h3",{id:"lsblk"},"lsblk"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"lsblk")," command in Linux lists block devices. This includes zoned block\ndevices.  This utility is usually included in the ",(0,r.kt)("em",{parentName:"p"},"util-linux"),"\npackage, which is installed by default on most Linux distributions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"lsblk")," usage examples are provided ",(0,r.kt)("a",{parentName:"p",href:"../tools/util-linux#lsblk"},"here"),"."),(0,r.kt)("h3",{id:"blkzone"},"blkzone"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"blkzone")," utility lists (reports) the zones of a zoned block device and\nmakes it possible to reset the write pointer position of a range of zones in\nthe device. This utility is usually included in the ",(0,r.kt)("em",{parentName:"p"},"util-linux")," package, which\nis installed by default on most Linux distributions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"blkzone")," usage examples are provided ",(0,r.kt)("a",{parentName:"p",href:"../tools/util-linux#blkzone"},"here"),"."),(0,r.kt)("h3",{id:"lsscsi"},"lsscsi"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{href:"http://sg.danny.cz/scsi/lsscsi.html",target:"_blank"},(0,r.kt)("em",{parentName:"p"},"lsscsi")),"\ncommand lists information about the SCSI devices connected to a Linux system.\n",(0,r.kt)("em",{parentName:"p"},"lsscsi")," is generally available as a package in most Linux distributions.\nRefer to your distribution documentation to find the name of the package\nthat provides the ",(0,r.kt)("em",{parentName:"p"},"lsscsi")," utility."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/sg3utils#lsscsi"},"linux utilities")," page provides more\ninformation on ",(0,r.kt)("inlineCode",{parentName:"p"},"lssci")," as well as usage examples."),(0,r.kt)("h3",{id:"sg3_utils"},"sg3_utils"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{href:"http://sg.danny.cz/sg/sg3_utils.html",target:"_blank"},(0,r.kt)("em",{parentName:"p"},"sg3_utils"))," package is a collection of command\nline tools that send SCSI commands to a SCSI device."),(0,r.kt)("p",null,"In Linux, all disks are exposed as SCSI disks. This includes ATA\ndrives.  ",(0,r.kt)("inlineCode",{parentName:"p"},"sg3_utils")," can be used to manage SAS ZBC disks as well as\nSATA ZAC disks. When dealing with SATA disks connected to SATA ports\n(for example, an AHCI adapter), the kernel ATA subsystem (libata)\ntranslates SCSI commands into ATA commands."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"sg3_utils")," includes three command line tools specific to ZBC disks:"),(0,r.kt)("center",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Utility Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"SCSI Command Invoked"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"sg_rep_zones")),(0,r.kt)("td",{parentName:"tr",align:"left"},"REPORT ZONES"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get the ZBC disk's zone information")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"sg_reset_wp")),(0,r.kt)("td",{parentName:"tr",align:"left"},"RESET WRITE POINTER"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Reset one zone or all zones of the ZBC disk")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("strong",{parentName:"td"},"sg_zone")),(0,r.kt)("td",{parentName:"tr",align:"left"},"CLOSE ZONE, FINISH ZONE, OPEN ZONE"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sends one of these commands to the given ZBC disk"))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/tools/sg3utils#sg3_utils"},"This section")," shows some examples of these\nutilities execution."),(0,r.kt)("h3",{id:"libzbc"},"libzbc"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbc")," is a user-space library that provides functions that are\nused to manipulate ZBC and ZAC disks.  The ",(0,r.kt)("em",{parentName:"p"},"libzbc")," project is hosted\non ",(0,r.kt)("a",{href:"https://github.com/westerndigitalcorporation/libzbc",target:"_blank"}," GitHub"),". Documentation is provided in the\nproject ",(0,r.kt)("a",{href:"https://github.com/westerndigitalcorporation/libzbc/blob/master/README.md",target:"_blank"}," README")," file. The API documentation can be generated using\n",(0,r.kt)("em",{parentName:"p"},"doxygen"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"libzbc")," provides a set of command-line utilities that are\nfunctionally similar to both the ",(0,r.kt)("inlineCode",{parentName:"p"},"blkzone")," utility and ",(0,r.kt)("em",{parentName:"p"},"the sg3_utils"),"\ncommand-line tools."),(0,r.kt)("p",null,"For more information on how to compile and install ",(0,r.kt)("em",{parentName:"p"},"libzbc"),", as well as usage\nexamples of the command line utilities provided by ",(0,r.kt)("em",{parentName:"p"},"libzbc"),", see ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools/libzbc"},"libzbc User\nLibrary")," in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/tools"},"Tools and Libraries"),"\ndocumentation."))}c.isMDXComponent=!0}}]);