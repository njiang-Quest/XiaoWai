import java.util.*;
import java.text.*;
//����Ĭ��ʱ��������ʾ��ʽ���Ǻ������Է�ʽ
//һ�����Ծ�Ĭ�Ϻ���Ϳ����ˣ�ʱ�����ڵĸ�ʽĬ��ΪMEDIUM��񣬱��磺2008-6-16 20:54:53
//������ʾ������ʱ�䶼����Date��Ļ����ϵ����ģ�����������Calendar����ʵ�ּ���TestDate2.java
public class TestDate {
   public static void main(String[] args) {
      Date now = new Date();
      //Calendar cal = Calendar.getInstance();
     
      DateFormat d1 = DateFormat.getDateInstance(); //Ĭ�����ԣ�����µ�Ĭ�Ϸ��MEDIUM��񣬱��磺2008-6-16 20:54:53��
      String str1 = d1.format(now);
      DateFormat d2 = DateFormat.getDateTimeInstance();
      String str2 = d2.format(now);
      DateFormat d3 = DateFormat.getTimeInstance();
      String str3 = d3.format(now);
      DateFormat d4 = DateFormat.getInstance(); //ʹ��SHORT�����ʾ���ں�ʱ��
      String str4 = d4.format(now);

      DateFormat d5 = DateFormat.getDateTimeInstance(DateFormat.FULL,DateFormat.FULL); //��ʾ���ڣ��ܣ�ʱ�䣨��ȷ���룩
      String str5 = d5.format(now);
      DateFormat d6 = DateFormat.getDateTimeInstance(DateFormat.LONG,DateFormat.LONG); //��ʾ���ڡ�ʱ�䣨��ȷ���룩
      String str6 = d6.format(now);
      DateFormat d7 = DateFormat.getDateTimeInstance(DateFormat.SHORT,DateFormat.SHORT); //��ʾ���ڣ�ʱ�䣨��ȷ���֣�
      String str7 = d7.format(now);
      DateFormat d8 = DateFormat.getDateTimeInstance(DateFormat.MEDIUM,DateFormat.MEDIUM); //��ʾ���ڣ�ʱ�䣨��ȷ���֣�
      String str8 = d8.format(now);//��SHORT�����ȣ����ַ�ʽ�����

 


     
      System.out.println("��Date��ʽ��ʾʱ��: " + now);//�˷�����ʾ�Ľ����Calendar.getInstance().getTime()һ��
     
     
      System.out.println("��DateFormat.getDateInstance()��ʽ��ʱ���Ϊ��" + str1);
      System.out.println("��DateFormat.getDateTimeInstance()��ʽ��ʱ���Ϊ��" + str2);
      System.out.println("��DateFormat.getTimeInstance()��ʽ��ʱ���Ϊ��" + str3);
      System.out.println("��DateFormat.getInstance()��ʽ��ʱ���Ϊ��" + str4);
     
      System.out.println("��DateFormat.getDateTimeInstance(DateFormat.FULL,DateFormat.FULL)��ʽ��ʱ���Ϊ��" + str5);
      System.out.println("��DateFormat.getDateTimeInstance(DateFormat.LONG,DateFormat.LONG)��ʽ��ʱ���Ϊ��" + str6);
      System.out.println("��DateFormat.getDateTimeInstance(DateFormat.SHORT,DateFormat.SHORT)��ʽ��ʱ���Ϊ��" + str7);
      System.out.println("��DateFormat.getDateTimeInstance(DateFormat.MEDIUM,DateFormat.MEDIUM)��ʽ��ʱ���Ϊ��" + str8);
   }

}