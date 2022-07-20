
dis= float(input("Enter the displacement "))
unit1= str(input("Tell the unit m or km "))
if unit1=="km":
      print("Displacement in metres is ", dis*1000,"m")
else:
   print("As it is already in metres so we proceed ")
d= float(input("Enter the distance travelled "))
unit2= str(input("Tell the unit m or km "))
if unit1=="km":
      print("Distance in metres is ", d*1000,"m")
else:
   print("As it is already in metres so we proceed ")
t= float(input("Enter the time taken to travel the distance "))
unit3= str(input("Tell the unit s or hr "))
if unit3=="hr":
         print("Time in seconds is ", t*3600,"s")

print("Avg speed")
print("= total distance/total time taken ")
print("=", d/t, "m/s")
print("Therefore average speed=",d/t)


print("Avg velocity")
print("= total distance/total time taken")
print("=", dis/t, "m/s")
print("Therefore average velocity=",dis/t)
