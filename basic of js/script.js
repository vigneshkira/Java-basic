
 
//  console.log("hello world")
//  alert("how are you")

// prompt("enter your name")
  




function greet(){
     const name = document.getElementById("name")
     const name1 = document.getElementById("age")
     name.innerText= "New york" + Date()
     name1.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUSEhIVFRUXFxcVFRYWFRgYFRYVFxgXGBUYFxgYHSggGBomGxUVITEhJSorLi4uFyEzODMsNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLTUtLS8rLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEIQAAIBAwMCAwUFBQYEBwEAAAECEQADIQQSMQVBEyJRBjJhcYFCkaGx0RQjUpLBB1NyouHwFTNDYhYkgrKz0vFj/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQFBv/EACsRAAICAgIAAwYHAAAAAAAAAAABAhEDIRIxBBNBFCJRYXGhMoGRscHR8P/aAAwDAQACEQMRAD8A8iAqQFOBUgK6EQRipRTxUgtMCIFPFT20+2mBCKUVOKUUAQilFTin20ADimii7abbSAHFNFF2022gYOKaKLtpttICEUoqe2ltpADilFE20ooGDimiibaaKAIRSip7aW2gCEU0UTbTbaQyEUoqcUttMCEVEii7aiVoECIpiKJtqJFIYMimiiEVEikBCKapxSpUBbC1ILU1WiBa2ozBhKmFogWpBadAC20tlH20+2nQgHh0tlH20ttFBYDZT7aNtpbaKAFtpitH21ErUjA7aYrRttNtpDAbaW2jbaW2gYLZS20WKaKQA9tNsosU8UhgdlLZRYpooGD2022ixSigAO2m20bbTbaABbaW2jbacLToQDZSK1Z2UzJRQioVqJSrJSolKRRW21ErVnbUSlICttpUfbSpAXAtTC04WiKtbmRELTgVPbT7aYEIpAVOKQFMRELT7amBT7aAB7aW2p7acLSYyIWoEVpaO1Nu8fRF/wDltj+tUWWoGBIpoou2mIpDBbaUVM07GTJ5OaB+gOKYiiRSZf6UDBRSipkU0VIyMU0VOKUUWBGKaKJFKKVgDiltokUop2BELUlSpAUW2tNEss9O0HiFh6I78T7on6fOqd23XXex+kLNd8s/uLvHxQgTXO6u3BrRrRNmYUqDLVlhQ2FZstFciosKMRUCKQwMUqnFKpAvhamqVMLU1SugxIBKWyibaaKBg9tOFqcUqAGC0+2pAVICmIHtpBaLFOopMZd6an7rUY/6a/T97bP9Ky2WvQPZjoNu/pD4bhb10taIadp2lXUyB5TgD+lcTqrOxmUxKkgxxIMVjF22VRSK1EijkVAiqBAWFPFPd7fOpxU3sqgUU9xc/QfkKmw7UREDGS0YGeTjFDY0irtpba3fZjqOnstca+RtZQFDLvnJPER6UPrXXNPqQqWrZtldzHyKAxIUAfu+Mg5OM1m5boqlRm29FcZdyozLMSFJE/Sh39OyRuUqSJAIgxxMH5Gtn2f9rmsk2rdpmsgl5H/PCgSxjds5/Cq3X+spq7vi2w4AVUi5tDSJP2SRGfWkpNsHRl0xFSimNaEkacClSFAElqxZFV1qxappiaO7/s90JutewDFphkSNzKwX8a5DXLmu+9jOiv4IuftXgbwGAGCYZlGdy+g5xmuZ9tOl/s98pv3ggNu9SRnuczNJTuTIo5dxQmFHahkVbKQErUCtHIqBFSWA201FilU2OjTCVIJWl07pT3biWwNpdgoLAhZJgSY4zXT3v7O9Qoc+LYOxSzAO0wBP8PwrobS7OZbOGK1HbVl1rT1FgDRggKT4g3NIlSRIWJzgjPxp0MwttREEwDOYMdqLFUbasCAQwl2YhGG4pEjEYxUSdFR2WwRMTmjKtZyWbwdGO6C5A3c7QduTxzj51sKlVDZMiC25rW9mLNvxWN214qLbLRMAHcoDHPAk/fVz2R0e/UW/gd3JHGeR8qbS6QpqLidwHQx8ZHf5VM/VF41bVnTDrFhYAYWVBxbUiC0HJI45H4V571SyFuNtJKknaxEBhJyK6DRdauWxuRR9lSXUkkqBwfTJ/Osbq7qW8ojvH+KDn45JPzrGEJRk76N8ihxTT2ZmwngTQytbXROneLc2FWKsB7sgxuGQfvq3q/ZOwCY8bAPrIIKjuM8n7q0dLs5+W6RzF20cH4/04pqCvWLVpmUJdxuUklSwny+WIjvzxVS71NFJ22247uCZ+Pl4rJzSka0uJ1mh02iNu476oi4ACiBGI3bBIwhnP5dqJZ6CIRzcBtsNxZbbMAO4JHBgH5EVxr6xwELJgmYmOykiY9GH316H7I9XsNpv3jbNjzsXxWhZmSR3EnEEwJnvWGS+0UmjjTaNvcDcQKg8xYb1aCAP3ZEvz6Y57VRVTadlILdtyE7TjdHo2IMflWl161N1rdrbtZgB5hJ4P2oMYknEVQuhi0FwwKsw2IoXcEOCuI8ob7iaqxFzSq9xPBN+xtVCVA/i2MRJ24+0CeZPeoO7EKGe2+0BAbbSIHEmOcx9KFoNA9+dpgBZYb4kIu7hjnCn4DHGKnbtsAJAgjywACQMSdoicf7xTjpgxRUDRYobVqSRpUqelYDirFk1WFTVqdgez6BNH4FkNqLe/wAO2SAC0eSIO0GDJrk/7QzZmz4VwPCvMBhGRE7gK5/QW71wqRkQOWUHbETDMDGDVXqxbcCwYTOGXaO07cnHHes4rYNFJqgalTRW4kQpBalFTtWLb4uEgRIzALdgTtOP9yKT6NI9h7PSbjgMqkg8EDFKr1jr/gqLabdq8c/P7UHk0q5rkeivZK3Z0Op9t0SwlhbGxrZG26LgLblK+bbtjIBxOKPpOp3biPqbbMrXAwvGVJdQNpBkz6DgfPiuE6udlzeu1YbaIYGGMkDJJ449a6f2Z1hugIQA3nXaIBMIMkETukGTP0rqbbPJ4pIzNORvXcrFZ823BEAkZgxkVYbUad2IFq4hmZ8UuJBiWXZ+nzFC8IEwQCDiIkGeMckcelBSwzM53KIYbjgA5J8og4kTAPYc1GWTUioRVAWGTmYJE/IxWb05ymQ0AXCSMgsPtRgyJ9cfOtixaLEAZJP3kmqemBI8mCGJ2I5yAQCTyA2QZYiN3oYrSTtIhKmDuXGDqjksd4jy7YG08naCe2O8Vv6Dpj3QSpGCAZnv8gao6bpFx9lwuxAKHaRcYkR6knvMD4niun9mryotwtIEqPTtjtVY5Li6Bx3stez+huWfFubkBVME+rMF+2AJ81TdGXWXGPLItyVJAIdZkEHiZ+6oazXBwUTcvMkruRlgegzBP5cU/SrRd2d90lFABiV2yAM8ACaKu5C/DJI4nqfUX0xC+GpD+YyM4I7lccfWm0V974Nw2woEARJBxz+BovtFd8V1uOpcQ5AXZIVVMggEGZBPrx8KbpWvt2rZ27+YK7HGDukiJAIAAhj659ZeRKW+imnWjt9F4emUvcBsqqsu/wBSVJRQWJWS4PaYHxrE6P7Sai+zA+GwCmCVKSwggEyAwInyxmubt6xnt3fFcFWYuFa45E+IuSq8cnPOarK5e2fDATkmDIOGaIZiTAXmPhNZTzBDDRLqns27PeKhV2Asw3Zy3bmaAvsuzW2vAoArbYMycMfT/tP310dm8PC1IPPgJ8plcfjRdE//AJG7H98I/luVlFHVJJfqcnrNCLaq7ItxSsgB2QqAQM+XIxGJ710Psrcsfsl12trIaCd/hliyjcqw3uxGPiYzWT7UMptWSxafD8g977TxuLDjBGM49K0Oj3o0moRt9tmNzYhtKu5digfZ5kuJB+tLJ0YrbM/V3FuEuFVSLu1QTut7QpBEQSxmDMHvVvV6osbTqSFdTuVmYAhH2bYU4MgGARMepNTs6lbN9jcO5cqGNseLMAqQghQMCfSg9U1mxssLh2C4Wl7bhpwPI4GSAcAGPjmpbTSHQXoN60q3heiyu3zQGLKDK4BJMDxFHfEd81c6lo7KG1p1eHVoubtxKeJsMkwAwyTAHeDPNc/pgb1m7de4/l2AjcWEM4mfEmfcBwRBAnsKddQ98tfv6gqWDPbkqpZ0UKsmIDQqj40cqdhxOj1fRNMm4jWKYBIHhuC0cASBzXO39O6gM6wGnbkGQPyrS1dtURz4lxkcAKx3FnEiDBIBBB5xxisJSs4mZMiAB8IzPrVqbYcaCGlUorR6N0O9qiwsru2bd3w3TH/tP3VbkkrYqMylNXH6bcFkaiP3bObYP/cpYEH+U1TihNMVHSaHV7QAblrIAAJuds/9NYnP5VV6+WZ0BZDPG0vAmIncB+HpVN7BYTbTAALHMcETLDFE0Nnc5QqreRvKpJ3AQxA8PJaFPw9YqetjJ3OmstxbRDbjt4EwWYqBtMHJiPn8aq37W1mXmCRPr8audbUB3Uo1sEAhGRElskLcKHcfdkTMGOOae7ZRpYOJwxErIBgZHbMfzD1qo5K7Bq+jOirOh0DXSQpUED7TqvP+LmkbDE7U2sxjapdQTu4iT8Zmug1Hs1Cbl8QnthB5RJJ97sADHeaWTPCNJvs3w+GnkTkvQwTrb9s7PEI24gMpH0OZpU37EP4vuKgf5iD+FKjRnRLqWr2OhBW6p3+TxSWU8SdrZBBOYHHNdb7DqL3gnDNuur7xLbRbYCR2GPXk1W1iJ+0WJtrhoPlGYsWjmBkTWl/Z6i7LbhthW425iRtVWRwSdwgAmB6SfWrxz5N/QU8dROdu2JB2EAqV2lgSBtJM4yPd+JqtpFZC3HZDgkEyMLBmcGO9anUdMFLBv4iCTjvnEH7qyV/5lsM0ecHIBlxO0zyMntzNRl22OMaSLOlty6/4vT7ueMxWVf2eA5Fy4rr4mAAAx3LIkZiGUg810KWwrqT2IMA8yMfTM/SsHqCsLLiABtJMT3MkmME+6DMk7fhV5JVGJEY25GPZ1l+Btv3pmAi3roIAGDgwF5HOPlmtAdd1emm3heJDgOwkSp3GZMH8aBpem3PCN5WAU7kYHBK+UMBIPZox6U/UrcHwrkBlhmuEuzkESqyW2tgiIA4rHlvRXEvdI6lqHuK4cBQ6q1tU8pDt5jHAJ/iOZIr0H2Rv+I7mBGAvEfbnBEH3TXl+hUptVlIYujiZEL5wDgZBaBB+uAa6v2T9prFhzauXCo3eUxCjyMGLN6SZ4+6ujFkpOLM5QuSZQ6zpVKJtBUslyBgSzbsmcjse3FZWosXQt0eVhbKrcZhDKDEQsxBieD+NbvtFFvwXa5vhJAVcQfswMQMmTM5PJrnk1VthcJcgttlQwEk3NzbU3T7u3iYls5zjPsqJb6T4Zt3PEAIG8yZEgFdgUz/FBAA7571jm2WZmBMgxzJYtPyzJJrT0t0izcxI80DzeWXSYnHYcQfWs9bcjftDGQcwIgkRPxrNlovvq2C6kAzNn64KwYoY6mw0rpJzeSeO6uD2xzQNcIa8CCD4DRDdt1vBHp8PhVYlf2c4z4tvMnPlf/SuhPRjK/iE1Gp3C2LrXSMiBtjb32giN0+vrW/oDat6W/auXpvDcPfeDCrAyYbzTHp6nisOzrG2kBFG4ESQ3qDCEGB24HeoDNwM4JZiSxgAgt6cr6kGAQT2isHs1S0Xx4ZwodSW3WzblruOV3cnGfpUtfpWtt4qK4UJ5gUAXByq7RsYH3sHuZgzRNnhhXS3uC3Ww0MdpWILLjg9hyfpRr1jyr4pVLZGDtO9VNyG8qkhWwzTJxWdgZ1rWg2iLggqFC2xFtciZYEjxJ2q3Bg+k5zbN21Lh3x5yrxuDMRCkqQSOTntV3Tm1uO1rsQoVgoI8wHiBt5EZUR8AaNcutae4S5Adr8KbTQTkRkCGO4D0XvHFF0VRY/4M1u1cuhWUHYIMwEY8CfN9D8PWs664LrG/wCJeM4gAAccGtP2e2lbyeILpYAqFD4VDJILgAEkoBEms/rA2FYJnMg5yIiqg3ewaJUH9u2ZAEyBDLOR5s5+Iqpe3TljtYLBHBDHJH3VpJobaqdzlUJPmZSxMjIwIJwMTWjZA13WlzB2ACSNilZzyZqV2w4UP4VwoeG2HafkYzQrNxXfyrEgAhBJwMmM57nESe1XtT4oCIhNxdxRVaZJADYSZGP0pcx8RafU+UQGAYQTDYEmQYYYmPuNXult+/UKJkbcbhtJmGMZIBIniZjvWRoi7XGYFlKo4KgEHcOVIUceoxgHvWrftzqLa+bykkypVguwFh3baeCDgj4GlJroEgfUSmo3ui+HlAqsFUHc+OOCFM49Pvlb15UqAYBQASiEFQ4MNOWEs2cZERiaO+xmDOyNlfMo2bVRxuxd5JGB2+lVNXp9uxxclSoCpuYlfPlQdoBG5XOPzqFvQxr9pTduC06yZjChDugypY+UScDkDnimvHYWfedzbmBBMkqxmR2B2nuZ4o224LRueYIyklY/dEFSAXIbzYM+YSZJzzWfbuoSlshW3HJmN2DtIURABAI/SKGrKjNrSL9u+zAGWM57/rSqkmn1f/TtXSknaVVoiTx8KVVzRJ0nTtEFdHW6Lm1iFG5zynvDcoxAAznFdf8A2eaZTYuysjwfjEgkj8yYrj+uXrgtrcV1LbwqAHcRJM4I/WoezXtO2l3rsU7lKPuLYJ+CxBAjFNVe2b4pNJnTde0wNlvMAWJMzn3hP3gtXFdR6d4ioVfyE+fMYBxA9YjuOayOo3mdt73IOcw0yZ78nn6/GtH2Z6nY2DT3WKElj4jCVJJwORE4GSK2nLl+EwyurZu9BHjKcR4eFOIKBWI9ONhFc6N73rviMTbXeCgnzCSBAGCR866b2Z6tYsPcS6gZQ922jLnc3nCsT2X94SR225rF01gpfglrbNcYMyt51WBMdgd248ZkdqnJO+MX2kOEdN/EH0+01y1C+KVUkqFeFBAEtxuJmDtmJzQOpXheuAXwbUCWIWCcKFxMloH4n6af/h60oBV2iXMEqCIPpHcAdqq2NLdDrvtgooIFslIHyRztB79pn41k4MXNepWuMNqPcuB7hSFjzuAdxIdpwTLDuQD8qwutKFvXAvAYxmfxrZ/YnW8wbyozFmVGAQc/u/I0FSCRxj4Ve6T7KWfDtX7951QlhchfEO4EgLbA5wGJniPpVxjXYuQTrEOlqyi73RYacBVKptye3PyisC2rDxFezEhSDg+ZT5o594Hj69q6G10+dRcTkBNoMCTKjYfMuJHPz71Q6xomJAAUD0EQCSeBs9IqXOxqGzJ0l5lW4HSVaAMwQZGWPcQOKP0/V2yXt8na8SO0E4+MVK701CjFlCQvCKrSQOTuAIJzP0xQ7NkJbS54Z3Mzr4kHaR4Q8u7fEjJjaPmeKhtMpxobqOL1xYw1srnnJUyI+QqvecnnPPYdjH9T99Xeo3fE1De6ISDkxiOZnNV79ggTgzu4PoQfyIirsmNArWnXyneoJYgrDAxIAghY9e/p9Ni70wTG4mPQiB8MjtWeOnsdpWT5gewJyGbaJ+zGT8uOK6fWWWFwhhDCJB9doz9efrUTdIvGrdBNGXW2otbULuUGYBwOZ9SBme/xqpqrJtmy6q6vbG4EJNxgLpgBSRkCMT2rUbSC7YS2HQMrO5DHzESIAEegJ5H9Kl1GwWOxb4e6sZmfDfdJ3/LdBJxJA9KyvYpLZytprvn3PcVQqlv3aRDAET55gjiJ+MVHU63cpI1Xd4VkPlUgwsge8QYjgZz3OtbW5btuQtsnageC0EAjYBjGOc9m4qpqbF4hhthArgH92wYCML7vlgSCMnsORT16jLiap1PiXgpLA53lnR8EsQigAEfPIrE6dF24Ea0bxJLKPE2be5M7TIgcVra64oRrYaS5UZMERMrGwYj4/Sh9B6WzOXW3u2DImOwaZ4iCMk/6VGdIHCzTu+zHi2/F8Q+IZdLW4Qu8zsELHDRg+tZWp6YTcVnXaG3SzNg5BGBkCM95n4V2vRtUht2wVZGmAYPhgKP4o5kRFV+raFjbS6B5dxQk9iw9Dzwaxj4h27N5eHVJoyLnTTdTbYtM7geUW8MANvBjHNY/XNMUb97bKFcFMFxMe8TyYjkd67X2X0bq6BL7WmKAlix5Iz8pgY9KxvaTQh3uNc3XCDLuHYkgQJkNntUR8QufH/fuS8M+/Q5joawzm2rEMhmYJk8HyjjfsM4wJrqE0TFbbQVBL+ZW88g9zuLCIA784mBXN6g21EopBBG0DepnGSVNaq6DVXVF4GPLvZmaT5gSCu6T9nse1beYnbM/LfSJ68W/GAVktQw8rSAW3YO51wexMYqktsF2ZtrBVBLIqyTvHYrAO7mO3rOKlrqF7UOouDcdpl8ywWfN6Dzcx3oWjcFgPUxyAcZxOOY+PNUnuhOGrNOyVu27rm55pZ9ptglgQxHmHu8+kfcKx+kFnuEgBVUSQYknHGB3mfQHiuj6D1bUKl0WrDXLd9msuxtM6kmdw3D3WhhjmM1yHtFY2EQx3faERBAIj8K260ZK2SOvAJB1F1YZvKtm0wA3GAGa6CcfClUuk9Cs3bSu7uGO6QOMMR/Aew9aVK4is9Jb2bYYuuxJO/HkhiWC9mKic/JcVl+1elRHDlQY95SGDNJxBQZAUDJzz3o3U/aqzaKmCVyXje7CCJAvMST5jEyecRXBdW66NTeFws8g4DbeAeCV+6efjSWN3s3eW1o0esaRXtC4qbGDEbB5jEwe5JyAc9prMGlBEeFdn1j/AHiuy1PTbK6ZWUoACJRmFwAOAWdFMbfdX+b41yvVNbYSIt/vSTuxZNjYZyqhdytxye1deOWBJKSbf1S/gwlz7Ou/s/vJZNtXaC1wiPCJJUrtgbht+0e+INbvVPZxrd5RuLEXD6CEgZ9Y7/Cewrznpei1T2zdsWxttwXcFRsLGAPUnPb0ruOn3NRe3m89s3F2eZtx3S205GBwDgZ/PmzqLn7jr6m+KT420XV6a+0rDHzXJPzZh6TmtPp1u7ZVPGt3IjtP8QEYaPyoyaa8huKXshN1tRttuU3QoUhR7ok5HeT61nq2pW4q71UMWYkh2UHexJUEHEg/Q00pRfZi5QkujVv+1ekRM2Ln2wGLW4G07TnfyCc1l2VW+viAwG3eQbSEVW5MGAY9J5+NUNZ0dl0StcayLY8RnQFi5CkE7WKiTjjvxQ9P0PQaraUuXLZK4GmNsC5I80p6iAPKaMtuPHqxYZQjLkldANbpgurvZEEWxiAPcX0/3zQ9V0lssxAA5lgIz39Kp6X2dfe5GtvqimAgV/Efksqjjk4PBycUXpvsuNt61dN1Ud9yO+9VEcM6x5iJPfv9/Jx3Sl9jb2zGt8QGt0i7Htqys+33QQWj1gVW6J0xiVG0g+aCLe1jttjHi78xJ8pURnnii/8ADB4zABiXuwHDNBfwySd3jjBCnJ+U9q1uh2jZsnbpxcBMeI13a5MqRB8cZnafnVeXKK7HLPGdaoq3fZtrmna4ILNcKHba86hQckA95GZzAxWY3sw0SS+MNuQ5iB3bHFbns31liTaVLty4Hclt1q1ktEFi/mAJxmtnqXU2SxJATdcRTuK3FLQSJCPgkj1gc1lOWVSqNG2NYnG5Wcd/4RIIYEEyDk7dgiZjfJyBz6/Ots9IvnzShwAW2sZgAch/hVPQlLjpe8QXG3eZVuYlNpO4YwciD6mr3T+rXULWrNu40bmCZmJm4VBLByP+3144rSUMrXaH53h4vSYDq3TWWzbcrJNwKSv2oUloWZng8/WodO01u3dTelu6LlkuircaV4jd8Y7fCop7b6Z1COWgNOQyscRJIBk5bO0c/Gi6L2q0ots1vTIVSCzICHUGAoYskAE4+JBMVcIzSqRlOWOTtGpc0dt0xZCKwEj9o28Y4KzAn86xriBXe0iCFtsBuZXTzcEPuAMLABAwR3mK19P119XaRU0d5kKuARcRVLRtcLPJhzjHFZeqsLZ22v2K6pIEk3lICnuygwOB6cffm3JNjcMdKmF01xUDK5A4ZWuIjyIyDAY7yYwB2PFF0Le+yeE5YwShggAd1WPLg54zQ/axH26caiw0YErcQypIydpO3OY+NaPSjb05XwbbhJY7Vklwqj3miGXLfCG57Vg9+8+zaKrSejL6nr/BX/lkw+M7lVmnawESMn170LT9avXW2XbTPjeu0uCgBO4HMhj69s1s+0nUCHRvDS2zIsBmgbCrKMDAbzTkYIBqwbVkqHV2VyVLlbxcvEHY27AUkCSCfpXRHwrePnSa/oiWZKXF2Yz9TuNDhVQkIQogptjO6csciCIFaOo6zfa09rwlcEbF3LDeHEBNy5BwufhT3Oo2tRc3TYAltq+IkhpEkS+QSSOeRxWTd0rLeIZbpG8GPEQIZxJgzt+R7/KuaEcjk3BfnRbljpcn9zMADtsfSomcsNWAAfSChNdh0vQgoyPeA8oT39+1QCFBOxPWsnQaS7Yv71sFQclfEtG0ckyWOfj2rpOtdc1NsjfYIPql62Zg5mf6etXKM7S49jjONXZzFz2HdY8HU2pCHLCCUlmJjIiJzPasNfZx7TgNetEoWdSuTLKYyORIEfWu2657QFELsl4HYoZVcMsMkiWDk8Ejgcniq2g6g3v2dE5JUEHeT5N4WBFwwJAWImBJ9auUZJe6ZqUG1yMy11S5a0/gtdXw94ZnVwG3kQWWIIkCOSOa4j2yv2WufuOBAPM74O4me5Oa7x7tlrp3WmR7QZVtrsYEqTCAPM+kA5rWs9WtGLb6a4LuwsVHTzjaTmSwkYPE8/CumEZUnJnLkmk2orR5v0Hq1m3YRHvbWG6V3XREuxHuKRwexpV6Ots9kEdv/Kv/APelV18jGzyK30hGIAYSZ5YwPvqne6WFjzfPn9KvacD40PUKJOK3pAWbvVD+ziwyoyr7pKDcvxDRM/WsS6qkzA/GrLoPSgm2PStIOK9BO2X+m6spbe2G2hokAcx9Ku6XWuDIut2+0e1Ywj0otph6VE0m7ouLaVHXXuqOUP74yYJ87SY4+18KoNr7pI85MY74FZpcR7oH3/rQ7LZqGtkro6oa9yiq13iQBEc81LSCy7fvfMsGIO1kbsyMCCprIsHHA/GrVsHsv4UpMrHFHSdE1Gn8PUi891zxbLXmJA2kDM5PxrI9ktUiXwL2+6sbYa44HGD74E/rWcS4DeXn4f6Vn2rb7sISfgDUo1lhXFk/aHVE6hyjuF3HYviMQqzgZY4qva6rdC7RdcDmA2Kq62y0mVP1B/Sq622/h/CqpMyao3+j9RuW2JW6QTyZie+frVrWa5ntMjXN0tu948+vzrJ6borjcKPqQPzNaV/pt0LlV/mX9ap4oyd0UssoqkZF0gqFZhAzGSJ9YiKno7y7mFy4xVkdMM0DcsccemPhQr2mafs/eKPptE3qn8wrOSUWXJ8ltFSzoLR95m+81f03S9OeSxH+I/fj5n76T6cjuv3iregsT9pB/wCr/Ss2yaOn6L4GmtEWnddzBmhyMgED8DQ9T1GWJ3uZEE75MemTmq66NdoPiWv5j+gqpqbNv+8Q/f8ApWfFMuTF7QdW8RVUs5gcTP8AU1jabrLpHnbyqVXIwDzzU+ppbAxcB+QP9YrKt27ZOX/yz/UVUYR40Pm+Vlzq/V2uAAsSABicY+FWOh9c8EebewgjZuGwgg8isXVJbHutP/pj+pqSC3t5afkK1iqhxWkxSk3K2b2l6jptp3abc5Lwxc4DZXHeGJNFa+t10Zg3kXYgDldqnsNsCKwtIbffd9I/St3ppszkv9ImqhHimkYzk2aVrQacoyCwfOBPnecfXkzWt13qDPGIgR7w/pFF6e+mgHbcMdi4n8Ip+q62x2sA/wCJjP4PRJW0EXUWjkNfrWgjf9JoXSuq3UYlX+zHPaZ/OidS1aZ22kH0n86zNP1IoSQFE/8A80P5jFRONqjTHKpJg31JLFi2ZNXbHWNQAVS+wERAJqkuuOcn6CP61JNe/wDG4+TEUkjtx4lkjTJ+NqP7+7/m/WlUhrT6v/MaVGzs9gw/APZ1Nr+5J+bMfyNAv6pDxZj7/wCtVrbfH8aHdf4/jXSeAPdvj+7AoDXx/APupi9CZ/jQAdL4/gH3CiWdQR9hfuH6VVRvjUlakxmx/wARbbAtoPkAKhZ1tyeF/D9apKwo1g57VII6LTdRvxgr/Mv61YHUdSPt/wCZf1rN0xxyKMzj1H+/pSZePsfUazUEGXH86/rWUz3Z97/MKs3nH8Q/39Ko3Lg9fwqUdMnoo6tnJyxP1qus+v40fUMJ5oKsKtHJI0tAT/EfvP61d1AxyaztLdUdzVq9rlj/AErZGZn3EzVvTWxHNVHvCas2NWB2rnyGy6COg/2KPpQJ4oDawUXTavNZbKNlGEYEUDUUya8RVTU9QX0oSBlbWgVmQKsanWT2NUDe+FXFCvY9ypLxVd7p9KlbdvSrFZe0y1t9OTPH4VQ6ffcD3ZGO/wAR8K11vMTO2PTNJS2Jx1Z0nTrige6D9P8ASo9TuA/YA+YA/pWbYuXAMc/Wgay/c7xHyNUQnozeogZwPurJ3wcGrOvuN/rWWXNKRceyyD86dKrLcaiJdaoPV8JJIs5pUHxW9fxpUHo+YvmJNPULliO3409Ktj5YC1v4UIrSpUgEtupJbpUqBhltUexapUqANSxpgR/+0ZtP8BSpVEi4dla8ny+6qV0f7ApUqSOiXRRvRQlilSqkcsi7YAPYUR7NNSrdGZUa3nmrFq0OxpUq55mqDCxRrFifSlSrOyy8tgRQblsD5UqVCEzO1IFUmFKlVoQNoqdthSpUwNjS3ccnt/7hWqjEn/f9KVKs49ly6NCw2OKDrmHpSpVsYI5zXVmE0qVJlx7EKmlKlUM9LwwTcKVKlSOzmz//2Q=="
     
    // alert("hello world")  
    
    document.getElementById("change").innerHTML = "lormmmdf"

    name.style.backgroundColor ="blue"
    name.style.color = "white"

}

// console.warn()
// console.error("fsdf")
console.table([{Name : "Vicky",roll :"57"},
               {Name :"Kiran",roll:"34"},
               {Name :"Kiran",roll:"34"},
               {Name :"Kiran",roll:"34"} ]
               )



//Variables 4 types 

var X = 59 // Global Variable 
let y = 20  //Block scope --> ES6--2015--->{local variable}
const Z = 10 //Block scope --> ES6--2015---->{local variable}

console.log(X,y,Z)

//reasign
X= 30
console.log(X)

//operators
X= y+Z
console.log(X)