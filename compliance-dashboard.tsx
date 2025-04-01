"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Clock, FileText, Filter, Search, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Textarea } from "@/components/ui/textarea"
import { Bot, Send, BookOpen, MessageSquare } from "lucide-react"

export default function ComplianceDashboard() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="container mx-auto p-4 max-w-7xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">跨境贸易合规政策智能助手</h1>
        <p className="text-muted-foreground">全面监控与管理您的跨境贸易合规风险</p>
      </header>

      <div className="flex justify-between items-center mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="w-full md:w-[600px] justify-start text-muted-foreground h-16 px-4 relative text-lg"
            >
              <Search className="h-6 w-6 mr-3" />
              <span>跨境政策法规深度解读</span>
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[800px] h-[700px] flex flex-col p-0">
            <DialogHeader className="px-6 pt-6 pb-2">
              <DialogTitle className="text-2xl">跨境政策法规深度解读</DialogTitle>
              <DialogDescription className="text-base">
                输入关键词或直接提问，获取跨境贸易政策法规的专业解读与合规建议
              </DialogDescription>
            </DialogHeader>
            <PolicyChatInterface />
          </DialogContent>
        </Dialog>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            筛选
          </Button>
          <Button size="sm">
            <FileText className="h-4 w-4 mr-2" />
            导出报告
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="overview">总览</TabsTrigger>
          <TabsTrigger value="customs">报关合规</TabsTrigger>
          <TabsTrigger value="tax">税务合规</TabsTrigger>
          <TabsTrigger value="ip">知识产权</TabsTrigger>
          <TabsTrigger value="product">产品合规</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <ComplianceCard
              title="合规总分"
              value="78"
              description="较上月提升5分"
              icon={<ShieldCheck className="h-5 w-5" />}
              color="bg-blue-100 text-blue-700"
            />
            <ComplianceCard
              title="待处理风险"
              value="12"
              description="3项高风险"
              icon={<AlertTriangle className="h-5 w-5" />}
              color="bg-red-100 text-red-700"
            />
            <ComplianceCard
              title="已完成合规"
              value="45"
              description="本月新增8项"
              icon={<CheckCircle className="h-5 w-5" />}
              color="bg-green-100 text-green-700"
            />
            <ComplianceCard
              title="即将到期"
              value="7"
              description="30天内需更新"
              icon={<Clock className="h-5 w-5" />}
              color="bg-amber-100 text-amber-700"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="col-span-2">
              <CardHeader>
                <CardTitle>合规风险分布</CardTitle>
                <CardDescription>按业务区域和合规类型</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {complianceData.map((item) => (
                    <div key={item.region} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{item.region}</span>
                        <span className="text-sm text-muted-foreground">{item.score}/100</span>
                      </div>
                      <Progress value={item.score} className="h-2" />
                      <div className="flex flex-wrap gap-2">
                        {item.issues.map((issue, index) => (
                          <Badge key={index} variant={getBadgeVariant(issue.severity)}>
                            {issue.type}: {issue.count}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>近期合规截止日</CardTitle>
                <CardDescription>需要优先处理的事项</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deadlines.map((deadline, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b last:border-0">
                      <div className={`p-2 rounded-full ${getDeadlineColor(deadline.daysLeft)}`}>
                        <Clock className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-medium">{deadline.title}</h4>
                        <p className="text-sm text-muted-foreground">{deadline.description}</p>
                        <div className="flex items-center mt-1">
                          <Badge variant={getDeadlineBadge(deadline.daysLeft)}>{deadline.daysLeft}天后到期</Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  查看全部截止日
                </Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="customs" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>报关合规检查列表</CardTitle>
                  <CardDescription>确保海关申报合规</CardDescription>
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-36">
                    <SelectValue placeholder="全部国家" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">全部国家</SelectItem>
                    <SelectItem value="us">美国</SelectItem>
                    <SelectItem value="eu">欧盟</SelectItem>
                    <SelectItem value="uk">英国</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {customsChecklist.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b last:border-0">
                      <div className={`p-2 rounded-full ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <h4 className="font-medium">{item.title}</h4>
                          <Badge variant={getStatusBadge(item.status)}>{getStatusText(item.status)}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>HS编码查询工具</CardTitle>
                <CardDescription>快速查询商品HS编码</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">商品描述</label>
                    <Input placeholder="输入商品名称或描述..." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1 block">目标国家/地区</label>
                    <Select defaultValue="us">
                      <SelectTrigger>
                        <SelectValue placeholder="选择国家/地区" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="us">美国</SelectItem>
                        <SelectItem value="eu">欧盟</SelectItem>
                        <SelectItem value="uk">英国</SelectItem>
                        <SelectItem value="ca">加拿大</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button className="w-full">查询HS编码</Button>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-start">
                <h4 className="font-medium mb-2">最近查询</h4>
                <div className="w-full space-y-2">
                  {recentHsQueries.map((query, index) => (
                    <div key={index} className="flex justify-between text-sm p-2 bg-muted rounded-md">
                      <span>{query.product}</span>
                      <span className="font-mono">{query.code}</span>
                    </div>
                  ))}
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        {/* 其他标签页内容可以根据需要添加 */}
        <TabsContent value="tax" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>税务合规管理</CardTitle>
              <CardDescription>管理全球税务申报与缴纳</CardDescription>
            </CardHeader>
            <CardContent>
              <p>税务合规内容将在此显示...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ip" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>知识产权保护</CardTitle>
              <CardDescription>管理商标、专利和版权</CardDescription>
            </CardHeader>
            <CardContent>
              <p>知识产权内容将在此显示...</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="product" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>产品合规管理</CardTitle>
              <CardDescription>确保产品符合各国标准</CardDescription>
            </CardHeader>
            <CardContent>
              <p>产品合规内容将在此显示...</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// 辅助组件
function ComplianceCard({ title, value, description, icon, color }) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <h3 className="text-3xl font-bold mt-1">{value}</h3>
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          </div>
          <div className={`p-2 rounded-full ${color}`}>{icon}</div>
        </div>
      </CardContent>
    </Card>
  )
}

// 辅助函数
function getBadgeVariant(severity) {
  switch (severity) {
    case "high":
      return "destructive"
    case "medium":
      return "warning"
    case "low":
      return "secondary"
    default:
      return "outline"
  }
}

function getDeadlineColor(days) {
  if (days <= 7) return "bg-red-100 text-red-700"
  if (days <= 14) return "bg-amber-100 text-amber-700"
  return "bg-blue-100 text-blue-700"
}

function getDeadlineBadge(days) {
  if (days <= 7) return "destructive"
  if (days <= 14) return "warning"
  return "secondary"
}

function getStatusColor(status) {
  switch (status) {
    case "completed":
      return "bg-green-100 text-green-700"
    case "pending":
      return "bg-amber-100 text-amber-700"
    case "risk":
      return "bg-red-100 text-red-700"
    default:
      return "bg-slate-100 text-slate-700"
  }
}

function getStatusIcon(status) {
  switch (status) {
    case "completed":
      return <CheckCircle className="h-4 w-4" />
    case "pending":
      return <Clock className="h-4 w-4" />
    case "risk":
      return <AlertTriangle className="h-4 w-4" />
    default:
      return <FileText className="h-4 w-4" />
  }
}

function getStatusBadge(status) {
  switch (status) {
    case "completed":
      return "success"
    case "pending":
      return "warning"
    case "risk":
      return "destructive"
    default:
      return "secondary"
  }
}

function getStatusText(status) {
  switch (status) {
    case "completed":
      return "已完成"
    case "pending":
      return "待处理"
    case "risk":
      return "风险"
    default:
      return "未知"
  }
}

// 模拟数据
const complianceData = [
  {
    region: "欧盟",
    score: 72,
    issues: [
      { type: "报关", count: 3, severity: "medium" },
      { type: "增值税", count: 2, severity: "high" },
      { type: "产品标准", count: 4, severity: "low" },
    ],
  },
  {
    region: "美国",
    score: 85,
    issues: [
      { type: "州税", count: 2, severity: "medium" },
      { type: "知识产权", count: 1, severity: "low" },
    ],
  },
  {
    region: "英国",
    score: 68,
    issues: [
      { type: "报关", count: 2, severity: "high" },
      { type: "增值税", count: 3, severity: "medium" },
    ],
  },
]

const deadlines = [
  {
    title: "欧盟VAT申报",
    description: "Q2季度增值税申报截止",
    daysLeft: 5,
  },
  {
    title: "美国加州销售税",
    description: "加州Q2销售税申报",
    daysLeft: 12,
  },
  {
    title: "商标续展",
    description: "美国商标续展截止日期",
    daysLeft: 25,
  },
  {
    title: "产品认证更新",
    description: "电子产品CE认证更新",
    daysLeft: 30,
  },
]

const customsChecklist = [
  {
    title: "HS编码审核",
    description: "确认所有产品HS编码准确性",
    status: "completed",
  },
  {
    title: "原产地证明",
    description: "准备欧盟出口原产地证明文件",
    status: "pending",
  },
  {
    title: "申报价值核对",
    description: "核对美国市场产品申报价值",
    status: "risk",
  },
  {
    title: "特殊许可证",
    description: "检查电子产品是否需要特殊进口许可",
    status: "pending",
  },
  {
    title: "关税计算",
    description: "计算并预估关税金额",
    status: "completed",
  },
]

const recentHsQueries = [
  { product: "智能手表", code: "8517.62.0000" },
  { product: "皮革钱包", code: "4202.31.0000" },
  { product: "蓝牙耳机", code: "8518.30.2000" },
]

// 政策法规解读对话界面
function PolicyChatInterface() {
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: "欢迎使用政策法规解读助手。您可以询问任何跨境贸易相关的政策法规问题，我将为您提供详细解读。",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = () => {
    if (!inputValue.trim()) return

    // 添加用户消息
    const userMessage = { role: "user", content: inputValue }
    setMessages([...messages, userMessage])
    setInputValue("")
    setIsLoading(true)

    // 模拟AI响应
    setTimeout(() => {
      const response = getAIResponse(inputValue)
      setMessages((prev) => [...prev, { role: "assistant", content: response }])
      setIsLoading(false)
    }, 1000)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-full">
      <ScrollArea className="flex-1 p-6">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-primary text-primary-foreground"
                    : message.role === "system"
                      ? "bg-muted text-muted-foreground text-sm"
                      : "bg-muted"
                }`}
              >
                {message.role === "assistant" && (
                  <div className="flex items-center mb-1 text-primary">
                    <Bot className="h-4 w-4 mr-1" />
                    <span className="text-xs font-medium">政策解读助手</span>
                  </div>
                )}
                <div className="whitespace-pre-wrap">{message.content}</div>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-muted">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                  <div
                    className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Textarea
            placeholder="输入您的问题，例如：'欧盟GDPR对跨境电商有哪些要求？'"
            className="min-h-[80px] flex-1 text-base"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button className="h-auto aspect-square" onClick={handleSend} disabled={!inputValue.trim() || isLoading}>
            <Send className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-wrap gap-2 mt-3">
          <Button variant="outline" size="sm" className="text-xs">
            <BookOpen className="h-3 w-3 mr-1" />
            欧盟VAT新规解读
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <MessageSquare className="h-3 w-3 mr-1" />
            美国关税豁免条件
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <FileText className="h-3 w-3 mr-1" />
            RCEP原产地规则
          </Button>
          <Button variant="outline" size="sm" className="text-xs">
            <FileText className="h-3 w-3 mr-1" />
            跨境电商合规指南
          </Button>
        </div>
      </div>
    </div>
  )
}

// 模拟AI响应函数
function getAIResponse(query) {
  // 简单的关键词匹配逻辑
  const lowerQuery = query.toLowerCase()

  if (lowerQuery.includes("vat") || lowerQuery.includes("增值税")) {
    return `## 欧盟VAT政策解读

欧盟增值税(VAT)是跨境电商必须了解的重要税种。以下是核心要点：

1. **2021年7月1日新规要点**：
   - 取消了€22以下商品的VAT豁免
   - 引入了进口一站式商店(IOSS)机制
   - 电商平台成为部分交易的VAT责任方

2. **VAT注册门槛**：
   - 距离销售：每个欧盟国家设有不同门槛(€35,000-€100,000)
   - 2021年7月1日后：统一为€10,000

3. **合规建议**：
   - 及时在相关国家注册VAT
   - 保持准确的交易记录
   - 考虑使用IOSS简化小额商品的VAT处理
   - 咨询专业税务顾问确保合规

需要了解更多具体国家的VAT税率或申报流程吗？`
  }

  if (lowerQuery.includes("关税") || lowerQuery.includes("tariff")) {
    return `## 美国关税政策解析

美国关税政策复杂且经常变化，以下是关键信息：

1. **普通关税**：
   - 基于商品的HS编码确定
   - 可在美国国际贸易委员会(USITC)网站查询
   - 大多数消费品关税在0-10%之间

2. **301条款关税**：
   - 针对中国原产地商品的额外关税
   - 分为四个清单(List 1-4)，税率从7.5%到25%不等
   - 需要特别关注产品是否在这些清单中

3. **关税豁免条件**：
   - 美国国内无法生产或供应不足
   - 产品对美国经济至关重要
   - 需通过USTR申请豁免
   - 豁免通常有时间限制，需定期更新

4. **最佳实践**：
   - 准确申报HS编码
   - 关注贸易政策变化
   - 考虑使用保税仓库
   - 评估供应链多元化策略

需要针对特定产品的关税分析吗？`
  }

  if (lowerQuery.includes("知识产权") || lowerQuery.includes("ip") || lowerQuery.includes("商标")) {
    return `## 跨境贸易知识产权保护策略

在跨境贸易中，知识产权保护至关重要：

1. **商标保护国际策略**：
   - **马德里体系**：通过一次申请覆盖多达128个国家/地区
   - **优先权原则**：首次申请后6个月内在其他国家申请可享有优先权
   - **使用证据**：保存商标在各市场的使用证据，防止被撤销

2. **应对侵权的有效途径**：
   - **海关备案**：在主要市场的海关进行知识产权备案
   - **平台保护**：使用亚马逊Brand Registry、阿里巴巴IPP等工具
   - **法律行动**：根据侵权严重程度采取警告信、行政投诉或诉讼

3. **常见误区**：
   - 认为中国商标自动在海外受保护
   - 忽视不同国家的商标分类差异
   - 未及时监控市场上的侵权行为
   - 使用含有地理标志的品牌名称

4. **成本效益分析**：
   - 优先保护核心市场和核心商标
   - 考虑商标维护成本
   - 评估执法成本与预期收益

需要针对特定市场的知识产权保护建议吗？`
  }

  if (lowerQuery.includes("原产地") || lowerQuery.includes("origin")) {
    return `## RCEP原产地规则详解

区域全面经济伙伴关系协定(RCEP)的原产地规则是享受关税优惠的关键：

1. **核心原则**：
   - **区域价值成分(RVC)**：大多数情况下要求产品的区域价值成分不低于40%
   - **税号改变标准(CTC)**：要求产品的HS编码发生特定级别的变化
   - **特定制造或加工工序**：某些产品需完成特定工序才能获得原产资格

2. **累积规则优势**：
   - RCEP允许成员国之间的原材料和加工累积计算
   - 例如：在中国使用日本原材料生产的产品出口到澳大利亚，日本原材料可计入区域价值成分

3. **原产地证明选择**：
   - **优惠原产地证书**：由授权机构签发
   - **原产地声明**：由经核准的出口商出具
   - 两种方式均有效，可根据贸易习惯和便利性选择

4. **合规建议**：
   - 建立完善的原产地管理系统
   - 保存足够的原材料采购和生产记录
   - 定期评估产品是否符合原产地要求
   - 考虑供应链调整以最大化RCEP优惠

需要针对特定产品的RCEP原产地分析吗？`
  }

  // 默认回复
  return `感谢您的问题。这是一个关于"${query}"的重要跨境贸易合规话题。

为了给您提供最准确的解读，我需要了解更多具体信息：

1. 您关注的是哪个国家或地区的法规？
2. 您的产品或服务类别是什么？
3. 您的业务模式是B2B还是B2C？

您也可以尝试以下热门话题：
- 欧盟VAT新规解读
- 美国关税豁免条件
- RCEP原产地规则
- 跨境电商知识产权保护策略

请提供更多细节，我将为您提供针对性的法规解读。`
}

