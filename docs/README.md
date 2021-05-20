---
pageClass: home-page
# some data for the components

name: Jie Hu
profile: /profile.jpg

cv: /cv.pdf
socials:
  - title: github
    icon: "/icons/github.svg"
    link: https://github.com/jhu066
  # - title: linkedin
  #   icon: "/icons/linkedin-mono.svg"
  #   link: https://www.linkedin.com/in/jie-hu-107752198/
  - title: email
    icon: "/icons/email.svg"
    link: jhu066@ucr.edu

bio: PhD Candidate 
office: 465 Winston Chung Hall 
dpt:
  - link: https://www1.cs.ucr.edu/
    title: Department of CS&E
  - link: https://www.ucr.edu/
    title: University of California, Riverside
# email: jhu066 (at) ucr (dot) edu
---

<ProfileSection :frontmatter="$page.frontmatter" />

## About Me
I am a PhD student at University of California, Riverside, advised by [Prof. Heng Yin](https://www.cs.ucr.edu/~heng/). Prior to UCR, I obtained a B.E. degree from Huazhong University of Science and Technology in 2017, advised by Prof. Deqing Zou. My research is focused on program analysis & vulnerability detection.


## News

- [Dec. 2020] I finished my internship at Baidu USA, advised by [Dr. Qian Feng](https://sites.google.com/site/qianfeng924/home).
- [Jun. 2020] I started my internship at Baidu USA, advised by [Dr. Qian Feng](https://sites.google.com/site/qianfeng924/home).


## Education

- **University of California, Riverside** <br/>
Ph.D. in Computer Science, July 2022. (expected) <br/>
Advisor: [Prof. Heng Yin](https://www.cs.ucr.edu/~heng/)

- **Huazhong University of Science and Technology** <br/>
B.E. in Computer Science, July 2017. <br/>
Advisor: Prof. Deqing Zou


## Publication

<!-- [→ Full list](/projects/) -->

<!-- <ProjectCard image="/projects/1.png" hideBorder=true> -->
<ProjectCard hideBorder=true>

  - [**RAID'19**] Yue Duan, Lian Gao, Jie Hu, and Heng Yin, [Automatic Generation of Non-intrusive Updates for Third-Party Libraries in Android Applications](https://www.cs.ucr.edu/~heng/pubs/LibBandAid.pdf), in the 22nd International Symposium on Research in Attacks, Intrusions and Defenses, September 2019.
  - [**ACSAC’16**] Zhen Li, Deqing Zou, Shouhuai Xu, Hai Jin, Hanchao Qi, Jie Hu. [VulPecker: An Automated Vulnerability Detection System Based on Code Similarity Analysis](https://dl.acm.org/doi/pdf/10.1145/2991079.2991102), in the 32nd Annual Conference on Computer Security Applications, December 2016.

</ProjectCard>


<!-- ## Awards & Honors

### Contests

- First place in **The Hogwarts House Cup** -->


<!-- Custom style for this page -->

<style lang="stylus">

.theme-container.home-page .page
  font-size 14px
  font-family "lucida grande", "lucida sans unicode", lucida, "Helvetica Neue", Helvetica, Arial, sans-serif;
  p
    margin 0 0 0.5rem
  p, ul, ol
    line-height normal
  a
    font-weight normal
  .theme-default-content:not(.custom) > h2
    margin-bottom 0.5rem
  .theme-default-content:not(.custom) > h2:first-child + p
    margin-top 0.5rem
  .theme-default-content:not(.custom) > h3
    padding-top 4rem

  /* Override */
  .md-card
    margin-top 0.5em
    .card-image
      padding 0.2rem
      img
        max-width 120px
        max-height 120px
    .card-content p
      -webkit-margin-after 0.2em

@media (max-width: 419px)
  .theme-container.home-page .page
    p, ul, ol
      line-height 1.5

    .md-card
      .card-image
        img 
          width 100%
          max-width 400px

</style>
